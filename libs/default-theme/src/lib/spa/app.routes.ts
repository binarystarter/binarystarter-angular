import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component'),
    children: [
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module'),
      },
    ],
  },
];
