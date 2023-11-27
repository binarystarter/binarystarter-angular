type TailWindPaletteType =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'line'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'cyan';

type TailWindPaletteLevel =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

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
