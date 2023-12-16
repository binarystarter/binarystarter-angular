import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './app-checkbox.component.html',
})
export class AppCheckboxComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string = '';
  @Input() group: FormGroup;
  @Input() options: { value: string; viewValue: string | number }[];

  control: AbstractControl;

  ngOnInit() {
    if (!this.group.controls || !this.group.controls[this.name])
      throw new Error('Control missing');

    this.control = this.group.controls[this.name];
  }
}
