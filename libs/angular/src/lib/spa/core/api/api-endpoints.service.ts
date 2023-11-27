import { Injectable } from '@angular/core';
import { join } from 'lodash';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  private base: string = join([environment.api.url], '/');

  constructor() {}

  join(path: string) {
    return join([this.base, path], '/');
  }

  public routes = {
    auth: {
      register: this.join('auth/register'),
      verify: (token: string) => `${this.join('auth/verify')}/${token}`,
    },
  };
}
