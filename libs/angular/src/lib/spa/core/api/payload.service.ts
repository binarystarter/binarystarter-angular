import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PayloadApiEndpointsService } from './payload-api-endpoints.service';
import { firstValueFrom } from 'rxjs';
import {
  ILoginResponse,
  IResponse,
  MeResponse,
} from '@binarystarter-angular/shared-types';

interface RefreshUser {
  email: string;
  collection: string;
  roles: string[];
  id: string;
}

export interface RefreshResponse {
  user: RefreshUser;
  refreshedToken: string;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private payloadApiEndpoints: PayloadApiEndpointsService,
  ) {}

  login(username: string, password: string) {
    return this.http.post<IResponse<ILoginResponse>>(
      this.payloadApiEndpoints.routes.auth.login,
      {
        email: username,
        password: password,
      },
      { withCredentials: true },
    );
  }

  logout() {
    return this.http.post<IResponse<Record<string, any>>>(
      this.payloadApiEndpoints.routes.auth.logout,
      {},
      { withCredentials: true },
    );
  }

  me() {
    return this.http.get<IResponse<MeResponse>>(
      this.payloadApiEndpoints.routes.auth.me,
    );
  }

  forgotPassword(email: string) {
    return firstValueFrom(
      this.http.post<IResponse<{ message: string }>>(
        this.payloadApiEndpoints.routes.auth.forgotPassword,
        {
          email,
        },
      ),
    );
  }

  resetPassword(token: string, password: string) {
    return firstValueFrom(
      this.http.post<IResponse<{ message: string }>>(
        this.payloadApiEndpoints.routes.auth.resetPassword,
        {
          token,
          password,
        },
      ),
    );
  }
}
