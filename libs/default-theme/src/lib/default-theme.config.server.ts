import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';
import { defaultThemeConfig } from './default-theme.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideClientHydration()],
};

export const defaultThemeServerConfig = mergeApplicationConfig(
  defaultThemeConfig,
  serverConfig
);
