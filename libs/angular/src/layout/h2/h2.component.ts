import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-h2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h2.component.html',
})
export class H2Component {
  @Input() class: string = '';
}
