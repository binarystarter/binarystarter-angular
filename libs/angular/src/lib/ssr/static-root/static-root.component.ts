import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { AngularAppService } from '../../spa/angular-app.service';

@Component({
  selector: 'web-static-root',
  templateUrl: './static-root.component.html',
})
export class StaticRootComponent implements OnInit, OnDestroy {
  private appService = inject(AngularAppService);
  sideMainNavigationSub: Subscription;
  @ViewChild('drawer') public drawer: MatDrawer;

  constructor() {}

  ngOnInit() {
    this.sideMainNavigationSub = this.appService.toggleListener.subscribe(
      (value) => {
        if (this.drawer) {
          this.drawer.toggle(value);
        }
      },
    );
  }

  ngOnDestroy() {
    this.sideMainNavigationSub.unsubscribe();
  }
}
