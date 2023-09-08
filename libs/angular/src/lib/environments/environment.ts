// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentType } from './EnvironmentType';

export const environment: EnvironmentType = {
  production: false,
  app: { name: 'binarystarter-angular', stage: 'dev', auth: 'passportjs' },
  api: { url: 'http://localhost:8080' },
  payload: { users_slug: 'users' },
  web: {
    sentry_dsn:
      'https://3606fe460ede9b38107b47987ec600f3@o4505800335097856.ingest.sentry.io/4505837928972288',
    url: 'http://localhost:4200',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
