import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-branding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branding.component.html',
})
export class BrandingComponent {
  @Input({ required: true }) width: string;
  @Input() lightSrc: string = '/assets/images/logo-light.png';
  @Input() darkSrc: string = '/assets/images/logo-dark.png';
  src: string = this.darkSrc;
}
