import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.css'],
})
export class AppLinkComponent implements OnChanges {
  @Input() class: string = '';
  @Input() color?: 'primary' | 'secondary' = 'primary';
  @Input() to: string;
  style: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const color = changes['color'] ? changes['color'].currentValue : this.color;

    this.style = `color-${color}`;
  }
}
