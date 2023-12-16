import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from '../auth/auth-utils';
import { AccountBaseComponent } from './pages/account-base/account-base.component';
import { SpaPathsBase } from '@binarystarter-angular/shared-constants';

const base = `${SpaPathsBase}/account`;
export const AccountPaths = {
  base,
  profile: `${base}/profile`,
};

export const accountRoutes: Routes = [
  {
    path: '',
    component: AccountBaseComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
        pathMatch: 'full',
      },
    ],
  },
];
