import { Injectable } from '@angular/core';
import { differenceInSeconds } from 'date-fns';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { firstValueFrom, from, lastValueFrom, Observable } from 'rxjs';
import { PayloadApiEndpointsService } from '../../core/api/payload-api-endpoints.service';
import jwtDecode from 'jwt-decode';
import { RefreshResponse } from '../../core/api/payload.service';
import { IResponse, IUser } from '@binarystarter-angular/shared-types';

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

/**
 * The injecatble responsible for setting the token if it exists before each request is made.
 */
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(
    private http: HttpClient,
    private payloadApiEndpoints: PayloadApiEndpointsService,
  ) {}

  intercept(
    oldReq: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<IResponse<any>>> {
    return from(this._handleAuthorization(oldReq, next));
  }

  /**
   * This callback handles the JWT authorization and authentication token
   *
   * @param request
   * @param next
   */
  async _handleAuthorization(request: HttpRequest<any>, next: HttpHandler) {
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
        // Call the refresh endpoint to get a new token
        const response = await refreshToken(
          this.http,
          this.payloadApiEndpoints.routes.auth.refresh,
        );

        if (response.success) {
          idToken = response.payload.refreshedToken;
        } else {
          throw new Error('Something went wrong refreshing.');
        }
      }
    }

    if (idToken) {
      localStorage.setItem('token', idToken);

      request = request.clone({
        headers: request.headers.set('Authorization', 'JWT ' + idToken),
      });
    }

    return lastValueFrom(next.handle(request));
  }
}
