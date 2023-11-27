import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { webConfig } from './web.config';
import { provideClientHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideClientHydration()],
};

export const serverAppConfig = mergeApplicationConfig(webConfig, serverConfig);
