import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './terms-of-service-page.component.html',
})
export class TermsOfServicePageComponent {}

export default TermsOfServicePageComponent;
