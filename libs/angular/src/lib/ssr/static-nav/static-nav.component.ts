import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StaticPaths } from '../static-routing.module';
import { AuthPaths } from '../../spa/core/auth/auth.routes';
import { AngularAppService } from '../../spa/angular-app.service';

@Component({
  selector: 'web-static-nav',
  templateUrl: './static-nav.component.html',
})
export class StaticNavComponent {
  @Input() mobile: boolean = false;
  private appService = inject(AngularAppService);
  protected router = inject(Router);
  protected staticPaths = StaticPaths;
  protected authPaths = AuthPaths;

  checkMobile() {
    if (this.mobile) {
      this.appService.toggleDrawer();
    }
  }
}
