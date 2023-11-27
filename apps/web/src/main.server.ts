import { bootstrapApplication } from '@angular/platform-browser';
import {
  WebRootComponent,
  serverAppConfig,
} from '@binarystarter-angular/angular';

const AngularServerBootstrap = () =>
  bootstrapApplication(WebRootComponent, serverAppConfig);

export default AngularServerBootstrap;
