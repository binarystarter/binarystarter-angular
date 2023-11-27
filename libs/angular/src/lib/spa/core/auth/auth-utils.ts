import { PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth-service/auth.service';
import { isPlatformBrowser } from '@angular/common';

/**
 * Make sure user is logged in
 *
 * @returns
 */
export function authGuard() {
  const platformId: Object = inject(PLATFORM_ID);
  const isBrowser: boolean = isPlatformBrowser(platformId);

  if (isBrowser) {
    const router = inject(Router);
    const authService = inject(AuthService);

    return new Observable((subscriber) => {
      const userSub = authService.user.subscribe({
        next: async (user) => {
          if (user === undefined) return;

          if (user && user.id) {
            subscriber.next(true);
          } else {
            subscriber.next(false);

            await router.navigate(['/c/auth/login']);
          }

          subscriber.complete();
        },
      });

      return {
        unsubscribe() {
          userSub.unsubscribe();
        },
      };
    });
  }

  return;
}

export function unAuthenticatedGuard() {
  const platformId: Object = inject(PLATFORM_ID);
  const isBrowser: boolean = isPlatformBrowser(platformId);

  if (isBrowser) {
    const router = inject(Router);
    const authService = inject(AuthService);

    return new Observable((subscriber) => {
      const userSub = authService.user.subscribe({
        next: async (user) => {
          if (user === undefined) return;

          if (user === null) {
            subscriber.next(true);
          } else {
            subscriber.next(false);
            await router.navigate(['/c/account/profile']);
          }
          subscriber.complete();
        },
      });

      return {
        unsubscribe() {
          userSub.unsubscribe();
        },
      };
    });
  }

  return;
}
