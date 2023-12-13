import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, unAuthenticatedGuard } from './auth-utils';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { ResetComponent } from './pages/reset/reset.component';
import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [unAuthenticatedGuard],
        pathMatch: 'full',
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [authGuard],
        pathMatch: 'full',
      },

      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [unAuthenticatedGuard],
        pathMatch: 'full',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [unAuthenticatedGuard],
        pathMatch: 'full',
      },
      {
        path: 'verify',
        component: VerifyComponent,
        canActivate: [unAuthenticatedGuard],
        pathMatch: 'full',
      },
      {
        path: 'reset/:token',
        component: ResetComponent,
        canActivate: [unAuthenticatedGuard],
        pathMatch: 'full',
      },
    ],
  },
];
