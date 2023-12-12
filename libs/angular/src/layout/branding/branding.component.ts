import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-branding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branding.component.html',
})
export class BrandingComponent implements OnChanges {
  @Input({ required: true }) width: number;
  @Input() lightSrc: string = '/assets/images/logo-light.png';
  @Input() darkSrc: string = '/assets/images/logo-dark.png';
  @Input() mode: 'dark' | 'light' = 'dark';
  @Input() href: string = '/';
  src: string = this.darkSrc;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mode']) {
      this.src =
        changes['mode'].currentValue === 'dark' ? this.darkSrc : this.lightSrc;
    }
  }
}
