import { Component } from '@angular/core';
import { BrandingComponent } from '../../../layout/branding/branding.component';
import { StaticPaths } from '../../static-paths';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'web-built-with',
  standalone: true,
  imports: [AppLayoutModule, BrandingComponent],
  templateUrl: './built-with.component.html',
})
export class BuiltWithComponent {
  staticPaths = StaticPaths;
}
