import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join, resolve } from 'path';
import * as compression from 'compression';
import { AngularServerBootstrap } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(resolve('dist/apps/web/browser/browser'));
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  server.use(compression());

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AngularServerBootstrap,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '30d',
    }),
  );

  // All regular routes use the Universal engine
  server.get(
    '/app*',
    express.static(distFolder, {
      maxAge: '30d',
    }),
    (req, res) => {
      res.sendFile(resolve(distFolder, 'index.html'));
    },
  );
  server.get(
    '/auth*',
    express.static(distFolder, {
      maxAge: '30d',
    }),
    (req, res) => {
      res.sendFile(resolve(distFolder, 'index.html'));
    },
  );

  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4200;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export default AngularServerBootstrap;
