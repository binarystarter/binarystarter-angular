import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '../layout.module';

@Component({
  selector: 'web-footer-v1',
  standalone: true,
  imports: [CommonModule, AppLayoutModule],
  templateUrl: './footer-v1.component.html',
})
export class FooterV1Component {
  @Input({ required: true }) copyright: string;
}
