import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'web-spa-wrapper',
  template: `
    <div *ngIf="isBrowser">
      <router-outlet />
    </div>
  `,
})
export class SpaWrapperComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}

export default SpaWrapperComponent;
