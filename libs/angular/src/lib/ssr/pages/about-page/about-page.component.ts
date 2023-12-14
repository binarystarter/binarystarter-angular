import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'web-about-page',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {}

export default AboutPageComponent;
