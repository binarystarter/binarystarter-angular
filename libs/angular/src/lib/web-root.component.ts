import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';

@Component({
  standalone: true,
  imports: [RouterModule, AppLayoutModule],
  selector: 'web-root',
  templateUrl: './web-root.component.html',
  providers: [],
})
export class WebRootComponent {
  title = 'binarystarter-angular';
}
