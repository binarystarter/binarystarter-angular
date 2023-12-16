import { Route } from '@angular/router';

export const defaultThemeRoutes: Route[] = [
  {
    path: 'c', // SpaPathsBase route
    loadChildren: () => import('./spa/spa.routes').then((r) => r.SpaRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./ssr/static.routes').then((r) => r.StaticRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./spa/pages/not-found/not-found.component'),
  },
];
