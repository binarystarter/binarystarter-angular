import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { webConfig } from './web.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const serverAppConfig = mergeApplicationConfig(webConfig, serverConfig);
