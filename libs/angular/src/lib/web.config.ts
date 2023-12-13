import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { webRoutes } from './web.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpErrorHandlingInterceptor } from './spa/config/interceptors/http.interceptor';
import { AngularAppService } from './spa/angular-app.service';
import { provideClientHydration } from '@angular/platform-browser';
import { apiProviders } from './spa/core/api/api.providers';

export const webConfig: ApplicationConfig = {
  providers: [
    AngularAppService,
    apiProviders(),
    provideRouter(webRoutes),
    provideClientHydration(),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),
      withInterceptors([httpErrorHandlingInterceptor])
    ),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
};
