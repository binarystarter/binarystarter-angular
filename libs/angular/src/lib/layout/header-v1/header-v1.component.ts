import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandingComponent } from '../branding/branding.component';
import { MatDividerModule } from '@angular/material/divider';
import { AppLayoutModule } from '../layout.module';
import { AngularAppService } from '../../spa/angular-app.service';

@Component({
  selector: 'web-header-v1',
  standalone: true,
  imports: [CommonModule, BrandingComponent, MatDividerModule, AppLayoutModule],
  providers: [],
  templateUrl: './header-v1.component.html',
})
export class HeaderV1Component {
  @Input() mobile: boolean = false;
  protected appService = inject(AngularAppService);
}
