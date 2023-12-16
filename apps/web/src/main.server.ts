import { bootstrapApplication } from '@angular/platform-browser';
import { WebRootComponent, serverConfig } from './theme';

const AngularServerBootstrap = () =>
  bootstrapApplication(WebRootComponent, serverConfig);

export default AngularServerBootstrap;
