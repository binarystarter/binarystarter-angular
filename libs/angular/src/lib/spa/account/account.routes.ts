import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from '../core/auth/auth-utils';
import { AccountBaseComponent } from './pages/account-base/account-base.component';

const base = 'account';
export const AccountPaths = {
  base,
  profile: `app/${base}/profile`,
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
      },
    ],
  },
];
