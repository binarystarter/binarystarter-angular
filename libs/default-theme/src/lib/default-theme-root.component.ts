import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './modules/layout/layout.module';

@Component({
  standalone: true,
  imports: [RouterModule, AppLayoutModule],
  selector: 'web-root',
  templateUrl: './default-theme-root.component.html',
  providers: [],
})
export class DefaultThemeRootComponent {}
