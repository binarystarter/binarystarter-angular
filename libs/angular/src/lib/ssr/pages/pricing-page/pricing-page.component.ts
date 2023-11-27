import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './pricing-page.component.html',
})
export class PricingPageComponent {}

export default PricingPageComponent;
