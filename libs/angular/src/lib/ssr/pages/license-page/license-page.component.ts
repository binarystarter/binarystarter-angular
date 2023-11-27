import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-license-page',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './license-page.component.html',
})
export class LicensePageComponent {}
export default LicensePageComponent;
