import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { accountRoutes } from './account.routes';

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
