import { bootstrapApplication } from '@angular/platform-browser';
import {
  WebRootComponent,
  serverAppConfig,
} from '@binarystarter-angular/angular';

export const AngularServerBootstrap = () =>
  bootstrapApplication(WebRootComponent, serverAppConfig);

export default AngularServerBootstrap;
