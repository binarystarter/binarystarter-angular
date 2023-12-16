import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { AppFormsModule } from '../../../modules/app-forms/app-forms.module';
import { AuthService } from './services/auth-service/auth.service';
import { ResetComponent } from './pages/reset/reset.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterService } from './pages/register/register.service';
import { HeaderComponent } from '../../../modules/layout/header/header.component';
import { StaticNavComponent } from '../../../ssr/components/static-nav/static-nav.component';
import { AppLayoutModule } from '../../../modules/layout/layout.module';

@NgModule({
  imports: [
    HeaderComponent,
    StaticNavComponent,
    AppLayoutModule,
    AuthRoutingModule,
    AppFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyComponent,
    ResetComponent,
    LogoutComponent,
  ],
  providers: [AuthService, RegisterService],
  exports: [],
})
export class AuthModule {}

export default AuthModule;
