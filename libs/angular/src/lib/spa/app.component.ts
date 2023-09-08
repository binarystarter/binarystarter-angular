import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ThemeService } from './core/theme.service';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from './core/auth/services/auth-service/auth.service';
import { Subscription } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './config/interceptors/authorization.interceptor';
import { HttpErrorHandlingInterceptor } from './config/interceptors/http.interceptor';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '../layout/layout.module';
import { AuthModule } from './core/auth/auth.module';
import AccountModule from './account/account.module';
import { AppFormsModule } from './core/app-forms/app-forms.module';

import { init } from '@sentry/angular';
import { environment } from '../environments/environment';
import { MediaMatcher } from '@angular/cdk/layout';
import { BrandingComponent } from '../layout/branding/branding.component';
import { StaticPaths } from '../ssr/static-routing.module';
import { AuthPaths } from './core/auth/auth.routes';
import { DashboardPaths } from './core/api/payload-paths';

init({
  dsn: `${environment.web.sentry_dsn}`,
  environment: environment.app.stage,
  release: new Date().getTime().toString(),
  integrations: [
    // new BrowserTracing({
    //   tracePropagationTargets: ["localhost:8080", "localhost", /^\//],
    //   routingInstrumentation: routingInstrumentation,
    // }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlingInterceptor,
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlingInterceptor,
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'binarystarter-angular';
  private authSubscription: Subscription;
  public loading: boolean = true;
  private themeService = inject(ThemeService);
  private authService = inject(AuthService);
  @ViewChild('appDrawer') public drawer: MatDrawer;
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
      this.drawer.mode = 'over';
      this.drawerWidth = 0;
      this.toggleDrawer(false);
    } else {
      this.drawer.mode = 'side';
      this.drawerWidth = this.drawer._getWidth();
    }
  };

  toggleDrawer = async (isOpen?: boolean) => {
    await this.drawer.toggle(isOpen);

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
