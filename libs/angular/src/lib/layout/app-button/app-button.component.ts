import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { captureException } from '@sentry/angular';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css'],
})
export class AppButtonComponent implements OnChanges, AfterViewInit {
  @Input() class: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'danger'
    | 'success'
    | 'warn'
    | undefined = undefined;
  @Input() inverted: boolean = false;
  @Input() disabled: boolean = false;
  @Input() action: () => Promise<any>;
  @ViewChild('btnEl') public btnEl: ElementRef<HTMLButtonElement>;
  @Input() icon?: string;

  loading: boolean = false;

  constructor() {
    // this.class += ` color-${this.color} ${this.inverted ? "is-inverted" : ""}`;
  }

  ngAfterViewInit() {
    if (this.btnEl) {
      // styling detail when replacing the button content with the loading animation
      // keep the button the same width it was before applying the loading animation
      const el = this.btnEl.nativeElement;

      const currentWidth = el.style.minWidth
        ? parseInt(el.style.minWidth.replace('px', ''))
        : 0;
      const currentHeight = el.style.minHeight
        ? parseInt(el.style.minHeight.replace('px', ''))
        : 0;

      if (currentWidth < el.offsetWidth) {
        el.style.minWidth = `${el.offsetWidth}px`;
      }
      if (currentHeight < el.offsetHeight) {
        el.style.minHeight = `${el.offsetHeight}px`;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const color = changes['color'] ? changes['color'].currentValue : this.color;
    const inverted = changes['inverted']
      ? changes['inverted'].currentValue
      : this.inverted;

    this.class += ` color-${color} ${inverted ? 'is-inverted' : ''}`;
  }

  @HostListener('click')
  async onClick() {
    if (this.action) {
      try {
        this.loading = true;
        await this.action();
        this.loading = false;
      } catch (error) {
        this.loading = false;

        captureException(error);
      }
    }
  }
}
