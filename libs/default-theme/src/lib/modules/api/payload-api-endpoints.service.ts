import { Injectable } from '@angular/core';
import { join } from 'lodash';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PayloadApiEndpointsService {
  private usersSlug: string = environment.payload.users_slug;
  private base: string = join([environment.api.url, 'api'], '/');
  private slugs = {
    pages: 'pages',
    tags: 'tags',
    posts: 'posts',
    categories: 'categories',
  };

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
      register: this.create(this.usersSlug),
      verify: (token: string) => this.create(this.usersSlug, `verify/${token}`),
      refresh: this.create(this.usersSlug, 'refresh-token'),
    },
    user: {
      update: (userId: string) => `${this.create(this.usersSlug)}/${userId}`,
    },
    pages: {
      get: this.create(this.slugs.pages),
    },
  };
}
