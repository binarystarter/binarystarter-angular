import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { PayloadService } from '../../../api/payload.service';
import { BehaviorSubject, catchError, firstValueFrom, Observable } from 'rxjs';
import { ApiEndpointsService } from '../../../api/api-endpoints.service';
import {
  ILoginResponse,
  IResponse,
  IUser,
  SuccessMessagePayload,
} from '@binarystarter-angular/shared-types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userSubject: BehaviorSubject<IUser | null | undefined> =
    new BehaviorSubject<IUser | null | undefined>(undefined);

  constructor(
    private http: HttpClient,
    private payloadService: PayloadService,
    private apiEndpoints: ApiEndpointsService,
    private _snackBar: MatSnackBar,
  ) {
    this.fetchUser().subscribe();
  }

  get user() {
    return this._userSubject;
  }

  saveSession(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  getSession() {
    return localStorage.getItem('token');
  }

  removeSession() {
    // if it exists then we set it back after removing the session
    const registeredUserEmail = localStorage.getItem('email');
    localStorage.clear();
    if (registeredUserEmail) localStorage.setItem('email', registeredUserEmail);
    this._userSubject.next(null);
  }

  async verify(email: string, token: string) {
    return firstValueFrom(
      this.http.post<IResponse<ILoginResponse>>(
        this.apiEndpoints.routes.auth.verify(token),
        {
          email,
        },
      ),
    );
  }

  private fetchUser() {
    return new Observable<IUser | null>((subscriber) => {
      this.payloadService
        .me()
        .pipe(
          catchError((error) => {
            throw error;
          }),
        )
        .subscribe((res: any) => {
          if (!res) {
            subscriber.next(null);
            return;
          }
          if (res.success && res.payload.user) {
            if (res.payload.token !== this.getSession()) {
              this.saveSession(res.payload.token);
            }

            // if the login is cookie based session
            this._userSubject.next(res.payload.user);
            subscriber.next(res.payload.user);
          } else {
            this._userSubject.next(null);
            subscriber.next(null);
          }

          subscriber.complete();
        });
    });
  }

  async login(username: string, password: string) {
    const res = await firstValueFrom(
      this.payloadService.login(username, password),
    );

    if (res.success) {
      this.saveSession(res.payload.token);
      await firstValueFrom(this.fetchUser());
    } else {
      this._snackBar.open(res.payload[0].message, '', {
        panelClass: 'error',
        duration: 4000,
      });
    }

    return res;
  }

  logout() {
    return this.payloadService.logout().subscribe({
      next: () => {
        this.removeSession();
        setTimeout(() => {
          window.location.reload();
        });
      },
    });
  }

  register<T>(data: T) {
    return firstValueFrom(
      this.http.post<IResponse<SuccessMessagePayload>>(
        this.apiEndpoints.routes.auth.register,
        data,
      ),
    );
  }

  forgotPassword(email: string) {
    return this.payloadService.forgotPassword(email);
  }

  resetPassword(token: string, newPassword: string) {
    return this.payloadService.resetPassword(token, newPassword);
  }
}
