import { PLATFORM_ID, inject } from '@angular/core';
import { differenceInSeconds } from 'date-fns';
import {
  HttpRequest,
  HttpClient,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { firstValueFrom, from, lastValueFrom, Observable, of } from 'rxjs';
import { PayloadApiEndpointsService } from '../../core/api/payload-api-endpoints.service';
import jwtDecode from 'jwt-decode';
import { RefreshResponse } from '../../core/api/payload.service';
import { IResponse, IUser } from '@binarystarter-angular/shared-types';
import { isPlatformBrowser } from '@angular/common';

type DecodedUser = Pick<IUser, 'email' | 'id' | 'roles'> & {
  iat: number;
  exp: number;
  collection: string;
};

/**
 * Refresh token cannot be imported from a service because of circular dependency
 * errors. This can be fixed in a nicer way, but for now I added this function.
 *
 * When other auth methods are added, verify before calling and set the right route.
 *
 * @param http
 * @param route
 */
const refreshToken = async (http: HttpClient, route: string) => {
  return firstValueFrom(http.post<IResponse<RefreshResponse>>(route, {}));
};

function setHeaders(
  idToken: string,
  currentReq: HttpRequest<unknown>,
): HttpRequest<unknown> {
  if (idToken) {
    localStorage.setItem('token', idToken);

    currentReq.headers.set('Authorization', 'JWT ' + idToken);

    const newReq = currentReq.clone({
      headers: currentReq.headers.set('Authorization', 'JWT ' + idToken),
    });

    return newReq;
  }

  return currentReq;
}

/**
 * The injecatble responsible for setting the token if it exists before each request is made.
 *
 * handles the JWT authorization and authentication token
 */
export const authorizationInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const http: HttpClient = inject(HttpClient);
  const payloadApiEndpoints: PayloadApiEndpointsService = inject(
    PayloadApiEndpointsService,
  );

  const platformId: Object = inject(PLATFORM_ID);
  const isBrowser: boolean = isPlatformBrowser(platformId);

  if (isBrowser) {
    let idToken = localStorage.getItem('token');

    if (idToken) {
      const now = new Date(); // current time
      const decodedToken = jwtDecode<DecodedUser>(idToken);
      const remainingSeconds = differenceInSeconds(
        now,
        new Date(decodedToken.exp),
      );

      if (
        remainingSeconds < 60 &&
        !request.urlWithParams.includes('refresh-token')
      ) {
        return new Observable(() => {
          // Call the refresh endpoint to get a new token
          from(
            refreshToken(http, payloadApiEndpoints.routes.auth.refresh),
          ).subscribe({
            next: (response) => {
              if (response.success) {
                idToken = response.payload.refreshedToken;
              } else {
                throw new Error('Something went wrong refreshing.');
              }

              return next(setHeaders(idToken, request));
            },
          });
        });
      }
      return next(setHeaders(idToken, request));
    }
  }

  return next(request);
};
