import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import {
  catchError,
  from,
  lastValueFrom,
  map,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { isArray, isString, isUndefined } from 'lodash';
import { IResponse } from '@binarystarter-angular/shared-types';

@Injectable()
export class HttpErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<IResponse<any>>> {
    return from(
      lastValueFrom(
        next
          .handle(request)
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
            map((data) => {
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
          ),
      ),
    );
  }
}
