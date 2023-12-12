import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountBaseComponent } from './pages/account-base/account-base.component';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from '../../layout/layout.module';
import { AppFormsModule } from '../core/app-forms/app-forms.module';
import { AuthModule } from '../core/auth/auth.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [ProfileComponent, AccountBaseComponent],
  imports: [
    AccountRoutingModule,
    RouterOutlet,
    AppFormsModule,
    AppLayoutModule,
    CommonModule,
    AuthModule,
  ],
})
export class AccountModule {}

export default AccountModule;
