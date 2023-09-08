import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() msg: string =
    'We are sorry, something went wrong. Try refreshing the page';

  constructor() {}

  refresh() {
    window.location.reload();
  }
}
