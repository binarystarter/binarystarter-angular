// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentType } from './EnvironmentType';

export const environment: EnvironmentType = {
  production: true,
  app: { name: '', stage: 'production' },
  api: { url: '' },
  payload: { users_slug: '' },
  web: {
    url: '',
  },
};
