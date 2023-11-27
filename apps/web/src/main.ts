import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  WebRootComponent,
  environment,
  webConfig,
} from '@binarystarter-angular/angular';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(WebRootComponent, webConfig).catch((err) =>
    console.error(err),
  );
});
