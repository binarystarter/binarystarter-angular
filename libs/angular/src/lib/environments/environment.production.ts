import { EnvironmentType } from './EnvironmentType';
import { environment } from './environment';

export const production: EnvironmentType = {
  ...environment,
  production: true,
  app: { name: 'binarystarter-angular', stage: 'prod', auth: 'passportjs' },
  api: { url: 'http://localhost:8080' },
  payload: { users_slug: 'users' },
  web: {
    sentry_dsn:
      'https://3606fe460ede9b38107b47987ec600f3@o4505800335097856.ingest.sentry.io/4505837928972288',
    url: 'http://localhost:4200',
  },
};
