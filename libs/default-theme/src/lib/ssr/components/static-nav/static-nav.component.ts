import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPaths } from '@binarystarter-angular/shared-constants';
import { CommonModule } from '@angular/common';
import { AngularAppService } from '../../../spa/angular-app.service';
import { StaticPaths } from '../../static-paths';
import { NavLinkComponent } from '../../../modules/layout/nav-link/nav-link.component';

@Component({
  selector: 'web-static-nav',
  standalone: true,
  imports: [NavLinkComponent, CommonModule],
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
