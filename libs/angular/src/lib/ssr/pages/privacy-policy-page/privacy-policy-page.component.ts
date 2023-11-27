import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './privacy-policy-page.component.html',
})
export class PrivacyPolicyPageComponent {}

export default PrivacyPolicyPageComponent;
