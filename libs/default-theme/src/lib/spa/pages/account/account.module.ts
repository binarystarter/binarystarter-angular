import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountBaseComponent } from './pages/account-base/account-base.component';
import { RouterOutlet } from '@angular/router';
import { AppFormsModule } from '../../../modules/app-forms/app-forms.module';
import { AuthModule } from '../auth/auth.module';
import { AccountRoutingModule } from './account-routing.module';
import { AppLayoutModule } from '../../../modules/layout/layout.module';

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
