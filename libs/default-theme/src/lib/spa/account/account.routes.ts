import { Routes } from '@angular/router';
import { SpaPathsBase } from '@binarystarter-angular/shared-constants';
import { AccountBaseComponent } from '../pages/account/pages/account-base/account-base.component';
import { authGuard } from '../pages/auth/auth-utils';
import { ProfileComponent } from '../pages/account/pages/profile/profile.component';

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
