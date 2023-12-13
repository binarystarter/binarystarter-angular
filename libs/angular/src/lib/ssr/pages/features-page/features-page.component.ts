import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'web-features-page',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './features-page.component.html',
})
export class FeaturesPageComponent {}

export default FeaturesPageComponent;
