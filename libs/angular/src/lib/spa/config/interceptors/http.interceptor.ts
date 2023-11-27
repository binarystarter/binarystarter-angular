import {
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
  HttpEventType,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { catchError, map, of, throwError } from 'rxjs';
import { isArray, isString, isUndefined } from 'lodash';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

export const httpErrorHandlingInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser: boolean = isPlatformBrowser(platformId);

  if (!isBrowser) {
    return next(request);
  } else {
    return next(request)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          let error = response.error;
          // handle very strange behavior when token is expiring while
          // redirecting from server dashboard to frontend domain
          if (response.status === 0) {
            return of();
          }

          switch (response.status) {
            case 400: {
              // check if is payload error for a certain field.
              if (isArray(response.error) && response.error[0].field) {
                error = {
                  errors: response.error,
                };
              }
            }
          }

          switch (response.status) {
            case 400:
            case 401:
            case 403:
            case 404:
            case 408:
            case 429: {
              // this means that the error response has an errors object which
              // represents each field error in an object with number keys and messages for each field.
              const isPayloadError =
                error.message === undefined && !isUndefined(error.errors);
              const errors: { message: string; field?: string }[] = [];

              if (isPayloadError) {
                const payloadError: {
                  errors: { field: string; message: string }[];
                } = error;

                payloadError.errors.map((err) => {
                  if (isArray(errors)) {
                    errors.push({ field: err.field, message: err.message });
                  }
                });
              } else {
                errors.push({ message: error.message as string });
              }

              return of(
                new HttpResponse({
                  ...response,
                  body: {
                    success: false,
                    status: response.status,
                    payload: isString(errors)
                      ? errors
                      : errors.length > 0
                      ? errors
                      : ['Something went wrong.'],
                  },
                  url: response.url === null ? undefined : response.url,
                }),
              );
            }
            default: {
              return throwError(() => error);
            }
          }
        }),
      )
      .pipe(
        map((data: any) => {
          if (data.type === HttpEventType.Response) {
            return data.body.success === undefined
              ? data.clone({
                  body: {
                    success: true,
                    payload: data.body,
                  },
                })
              : data;
          } else {
            return data;
          }
        }),
      );
  }
};
