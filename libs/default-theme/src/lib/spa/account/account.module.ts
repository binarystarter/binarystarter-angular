import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../pages/account/pages/profile/profile.component';
import { AccountBaseComponent } from '../pages/account/pages/account-base/account-base.component';
import { AccountRoutingModule } from '../pages/account/account-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppFormsModule } from '../../modules/app-forms/app-forms.module';
import { AppLayoutModule } from '../../modules/layout/layout.module';
import AuthModule from '../pages/auth/auth.module';

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
