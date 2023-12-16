import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { WebRootComponent, env, webConfig } from './theme';

if (env.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(WebRootComponent, webConfig).catch((err) =>
    console.error(err)
  );
});
