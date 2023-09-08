import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';
import StaticModule from './ssr/static.module';
import { ServerModule } from '@angular/platform-server';
import { WebRootComponent } from './web-root.component';

@Component({
  standalone: true,
  imports: [
    WebRootComponent,
    ServerModule,
    RouterModule,
    AppLayoutModule,
    StaticModule,
  ],
  selector: 'web-root',
  templateUrl: './web-root.component.html',
  providers: [],
})
export class ServerWebRootComponent {
  title = 'binarystarter-angular';
}
