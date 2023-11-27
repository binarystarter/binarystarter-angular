import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-branding-symbol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branding-symbol.component.html',
})
export class BrandingSymbolComponent {
  @Input({ required: true }) width: number;
  @Input() src: string = '/assets/images/logo-symbol.png';
}
