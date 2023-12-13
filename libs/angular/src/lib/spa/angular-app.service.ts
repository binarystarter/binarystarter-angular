import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

function _window(): Window & { gtag: any } {
  return window as unknown as Window & { gtag: any };
}

@Injectable({
  providedIn: 'root',
})
export class AngularAppService {
  public toggleListener = new BehaviorSubject<boolean>(false);
  get nativeWindow(): Window {
    return _window();
  }
  get gtag() {
    return _window().gtag;
  }

  toggleDrawer() {
    this.toggleListener.next(!this.toggleListener.value);
  }
}
