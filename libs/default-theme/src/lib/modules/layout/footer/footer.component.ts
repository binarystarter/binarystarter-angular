import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '../layout.module';

@Component({
  selector: 'web-footer-v1',
  standalone: true,
  imports: [CommonModule, AppLayoutModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input({ required: true }) copyright: string;
}
