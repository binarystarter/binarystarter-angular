import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { AppLayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { FooterV1Component } from '../layout/footer-v1/footer-v1.component';
import { HeaderV1Component } from '../layout/header-v1/header-v1.component';
import { AngularAppService } from '../spa/angular-app.service';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StaticNavComponent } from './static-nav/static-nav.component';
import { BuiltWithComponent } from './components/built-with/built-with.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule,
    StaticNavComponent,
    FooterV1Component,
    HeaderV1Component,
    BuiltWithComponent,
  ],
  selector: 'web-app',
  templateUrl: './static.component.html',
})
export class StaticComponent implements OnInit, OnDestroy {
  private appService = inject(AngularAppService);
  sideMainNavigationSub: Subscription;
  @ViewChild('drawer') public drawer: MatDrawer;
  isMobile: boolean = false;
  // Subscriptions
  breakpointSubscription: Subscription;

  constructor(private bp: BreakpointObserver) {
    this.breakpointSubscription = this.bp
      .observe(['(max-width: 767px)'])
      .subscribe({ next: (val) => (this.isMobile = val.matches) });
  }

  ngOnInit() {
    this.sideMainNavigationSub = this.appService.toggleListener.subscribe(
      () => {
        if (this.drawer) {
          setTimeout(() => {
            this.drawer.toggle();
          });
        }
      },
    );
  }

  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
    this.sideMainNavigationSub.unsubscribe();
  }
}
