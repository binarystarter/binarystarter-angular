import { Route } from '@angular/router';

export const webRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./ssr/static.module'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./spa/core/auth/auth.module'),
  },
  {
    path: 'app',
    loadComponent: () => import('./spa/app.component'),
    children: [
      {
        path: 'account',
        loadChildren: () => import('./spa/account/account.module'),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./spa/not-found/not-found.component'),
  },
];
