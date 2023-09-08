import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service/auth.service';
import { Observable } from 'rxjs';
import { AuthPaths } from './auth.routes';

/**
 * Make sure user is logged in
 *
 * @returns
 */
export function authGuard() {
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

          await router.navigate([AuthPaths.login]);
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

export function unAuthenticatedGuard() {
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
          await router.navigate(['/app']);
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
