import { Injectable } from '@angular/core';
import { join } from 'lodash';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PayloadApiEndpointsService {
  private usersSlug: string = environment.payload.users_slug;
  private base: string = join([environment.api.url, 'api'], '/');

  constructor() {}

  private create(slug: string, path: string = '') {
    return join([this.base, slug, path], '/');
  }

  public routes = {
    auth: {
      login: this.create(this.usersSlug, 'login'),
      me: this.create(this.usersSlug, 'me'),
      logout: this.create(this.usersSlug, 'logout'),
      forgotPassword: this.create(this.usersSlug, 'forgot-password'),
      resetPassword: this.create(this.usersSlug, 'reset-password'),
      refresh: this.create(this.usersSlug, 'refresh-token'),
    },
    user: {
      update: (userId: string) => `${this.create(this.usersSlug)}/${userId}`,
    },
  };
}
