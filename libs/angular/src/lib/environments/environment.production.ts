import { EnvironmentType } from './EnvironmentType';
import { environment } from './environment';

export const production: EnvironmentType = {
  ...environment,
  production: true,
  app: { name: 'binarystarter-angular', stage: 'prod', auth: 'passportjs' },
  api: { url: 'http://localhost:8080' },
  payload: { users_slug: 'users' },
  web: {
    url: 'http://localhost:4200',
  },
};
