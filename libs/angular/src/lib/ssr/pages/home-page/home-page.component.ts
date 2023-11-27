import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'web-home-page',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
