import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import { UsersCollection } from './src/payloadcms/collections/UsersCollection';
import { CategoriesCollection } from './src/payloadcms/collections/CategoriesCollection';
import { PagesCollection } from './src/payloadcms/collections/PagesCollection';
import { PostsCollection } from './src/payloadcms/collections/PostsCollection';
import { TagsCollection } from './src/payloadcms/collections/TagsCollection';
import * as path from 'path';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { ReturnToWebComponent } from './src/payloadcms/components/ReturnToWebComponent';
import {
  RedirectToFrontendLogin,
  RedirectToFrontendLogoutButton,
} from './src/payloadcms/components/RedirectComponent';
import { useInfrastructure } from './src/utils/use-infrastructure';

const { configuration } = useInfrastructure();

export default buildConfig({
  serverURL: configuration.api.url,
  db: mongooseAdapter({
    url: configuration.mongo.url,
    connectOptions: {
      user: configuration.mongo.username,
      pass: configuration.mongo.password,
      dbName: configuration.mongo.db,
    },
  }),
  editor: slateEditor({}),
  collections: [
    UsersCollection,
    CategoriesCollection,
    PagesCollection,
    PostsCollection,
    TagsCollection,
  ],
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/graphql',
    graphQLPlayground: '/playground',
  },
  rateLimit: {
    window: 90000,
    max: 500,
    trustProxy: true,
  },
  admin: {
    user: UsersCollection.slug,
    buildPath: path.resolve(__dirname, '../../dist/apps/payload'),
    meta: {
      titleSuffix: configuration.app.name || '',
      favicon: `${configuration.web.url}/assets/favicon.ico`,
    },
    components: {
      beforeNavLinks: [ReturnToWebComponent],
      logout: {
        Button: RedirectToFrontendLogoutButton,
      },
      views: {
        'redirect-to-frontend-login': {
          Component: RedirectToFrontendLogin,
          path: '/login',
        },
      },
    },
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
          '@binarystarter-angular/shared-types': [
            path.resolve('../../libs/shared-types/src'),
          ],
          '@binarystarter-angular/shared-constants': [
            path.resolve('../../libs/shared-constants/src'),
          ],
        },
      },
    }),
  },
  cors: [configuration.web.url, configuration.api.url],
  csrf: [configuration.web.url],
  typescript: {
    declare: false,
    outputFile: path.resolve(
      '../',
      '../',
      'libs',
      'shared-types',
      'src',
      'payload-types.ts'
    ),
  },
  graphQL: {
    schemaOutputFile: path.resolve(
      '../',
      '../',
      'libs',
      'shared-types',
      'src',
      'generated-schema.graphql'
    ),
  },
  plugins: [],
});
