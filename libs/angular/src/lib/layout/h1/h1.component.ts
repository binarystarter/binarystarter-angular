import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-h1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h1.component.html',
})
export class H1Component {
  @Input() class: string = 'text-white';
}
