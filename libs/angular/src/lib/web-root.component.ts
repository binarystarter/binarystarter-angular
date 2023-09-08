import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';
import StaticModule from './ssr/static.module';

@Component({
  standalone: true,
  imports: [RouterModule, AppLayoutModule, StaticModule],
  selector: 'web-root',
  templateUrl: './web-root.component.html',
  providers: [],
})
export class WebRootComponent {
  title = 'binarystarter-angular';
}
