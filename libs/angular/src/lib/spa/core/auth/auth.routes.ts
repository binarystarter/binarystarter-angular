import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, unAuthenticatedGuard } from './auth-utils';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { ResetComponent } from './pages/reset/reset.component';

const base = 'auth';
export const AuthPaths = {
  base,
  login: `${base}/login`,
  register: `${base}/register`,
  forgotPassword: `${base}/forgot-password`,
  verify: `${base}/verify`,
  logout: `${base}/logout`,
};

export const authRoutes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [unAuthenticatedGuard],
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [authGuard],
      },

      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [unAuthenticatedGuard],
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [unAuthenticatedGuard],
      },
      {
        path: 'verify',
        component: VerifyComponent,
        canActivate: [unAuthenticatedGuard],
      },
      {
        path: 'reset/:token',
        component: ResetComponent,
        canActivate: [unAuthenticatedGuard],
      },
    ],
  },
];
