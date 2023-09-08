import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'web-nav-link',
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() href: string = '';
  @Input() class: string = '';
  @Input() full: boolean = false;
  @Input() to: string = ''; // path where to redirect
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
  @Input() icon?: string;
  domain: string = environment.web.url;
}
