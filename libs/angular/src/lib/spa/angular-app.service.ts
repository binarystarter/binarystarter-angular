import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AngularAppService {
  public toggleListener = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleDrawer() {
    this.toggleListener.next(!this.toggleListener.value);
  }
}
