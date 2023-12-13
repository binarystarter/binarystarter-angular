export type EnvironmentType = {
  production: boolean;
  app: {
    stage: string;
    name: string;
  };
  api: {
    url: string;
  };
  payload: {
    users_slug: string;
  };
  web: {
    url: string;
  };
};
