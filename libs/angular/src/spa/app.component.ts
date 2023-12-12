import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ThemeService } from './core/theme.service';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from './core/auth/services/auth-service/auth.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '../layout/layout.module';
import { AuthModule } from './core/auth/auth.module';
import AccountModule from './account/account.module';
import { AppFormsModule } from './core/app-forms/app-forms.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { BrandingComponent } from '../layout/branding/branding.component';
import { DashboardPaths } from './core/api/payload-paths';
import { AuthPaths } from '@binarystarter-angular/shared-constants';
import { StaticPaths } from '../ssr/static-paths';

@Component({
  standalone: true,
  imports: [
    AppLayoutModule,
    BrandingComponent,
    AppFormsModule,
    RouterModule,
    AuthModule,
    AccountModule,
  ],
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'binarystarter.com';
  @ViewChild('appDrawer') public drawer: MatDrawer;
  private authSubscription: Subscription;
  public loading: boolean = true;
  private themeService = inject(ThemeService);
  private authService = inject(AuthService);
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: (event: MediaQueryListEvent) => void;
  private media = inject(MediaMatcher);
  error: string = '';
  drawerInitialState: boolean = true;
  drawerWidth = 0;
  staticPaths = StaticPaths;
  authPaths = AuthPaths;
  dashboardPaths = DashboardPaths;

  constructor() {
    // Load Color Scheme
    this.themeService.load();
    this.mobileQuery = this.media.matchMedia('(max-width: 1280px)');

    if (this.mobileQuery.matches) {
      this.drawerInitialState = false;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mediaQueryChanges();
    });

    /**
     * Media Query
     */
    this.mobileQuery.addEventListener('change', this.mediaQueryChanges);

    const observer = new ResizeObserver(() => {
      this.mobileQuery = this.media.matchMedia('(max-width: 1280px)');
    });

    observer.observe(document.getElementsByTagName('body')[0]);
  }

  mediaQueryChanges = () => {
    if (this.mobileQuery.matches) {
      if (this.drawer) this.drawer.mode = 'over';
      this.drawerWidth = 0;
      this.toggleDrawer(false);
    } else {
      if (this.drawer) this.drawer.mode = 'side';
      this.drawerWidth = this.drawer._getWidth();
    }
  };

  toggleDrawer = async (isOpen?: boolean) => {
    await this.drawer.toggle();
    this.drawerWidth = this.mobileQuery.matches ? 0 : this.drawer._getWidth();
  };

  /**
   * ng on destroy LCE
   */
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit() {
    this.authSubscription = this.authService.user.subscribe({
      next: async () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  async checkMobile() {
    if (this.mobileQuery.matches) {
      await this.toggleDrawer();
    }
  }
}

export default AppComponent;
