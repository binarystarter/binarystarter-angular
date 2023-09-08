import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { webRoutes } from './web.routes';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationInterceptor } from './spa/config/interceptors/authorization.interceptor';
import { HttpErrorHandlingInterceptor } from './spa/config/interceptors/http.interceptor';
import { AngularAppService } from './spa/angular-app.service';

export const webConfig: ApplicationConfig = {
  providers: [
    AngularAppService,
    provideRouter(webRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(withInterceptorsFromDi()),
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
  ],
};
