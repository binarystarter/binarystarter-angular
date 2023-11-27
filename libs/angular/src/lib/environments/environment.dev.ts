// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentType } from '../../../../shared-types/src/lib/EnvironmentType';

export const environment: EnvironmentType = {
  production: false,
  app: { name: 'binarystarter-angular', stage: 'dev' },
  api: { url: 'http://localhost:8080' },
  payload: { users_slug: 'users' },
  web: {
    url: 'http://localhost:4200',
  },
};
