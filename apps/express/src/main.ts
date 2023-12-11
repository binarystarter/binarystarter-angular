/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import payload from 'payload';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import { register, registerPath, verifyAccount, verifyPath } from './auth';
import { useInfrastructure } from './utils/use-infrastructure';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';

dotenv.config({
  path: path.resolve(path.join(process.cwd(), 'apps/express/.env')),
});
const { configuration } = useInfrastructure();

const start = async () => {
  const app = express();

  app.set('trust proxy', true);
  // parse application/json
  app.use(bodyParser.json());

  app.use(
    cors({
      origin: configuration.web.url,
      credentials: true,
      allowedHeaders: 'Content-Type,Authorization',
    })
  );

  try {
    if (!configuration.payload.secret)
      throw new Error('Payload secret cannot be undefined.');

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: configuration.email.user,
        pass: configuration.email.password,
      },
    });

    await payload.init({
      secret: configuration.payload.secret,
      express: app,
      email: {
        fromName: 'binarystarter-angular',
        fromAddress: configuration.email.from,
        transport: transporter,
      },
      onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);

        console.log('API: Payload CMS is ready!');
      },
    });

    app.use(payload.authenticate);
  } catch (error) {
    console.error('App: Error initializing Payload', error);
  }

  /**
   * Extra custom routes
   */
  app.post(registerPath, register);
  app.post(verifyPath, verifyAccount);
  /**
   * End extra custom routes
   */

  app.get('/', (req, res) => {
    res.send('Silence is golden.');
  });

  const port = process.env.api_port || 3333;
  console.log(`Starting http://localhost:${port}....`);

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  server.on('error', console.error);
};

start();
