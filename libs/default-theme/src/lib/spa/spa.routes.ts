import { Routes } from '@angular/router';
import SpaWrapperComponent from './spa-wrapper.component';

export const SpaRoutes: Routes = [
  {
    path: '',
    component: SpaWrapperComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module'),
      },
      {
        path: '',
        loadChildren: () => import('./app.routes').then((r) => r.appRoutes),
      },
    ],
  },
];
