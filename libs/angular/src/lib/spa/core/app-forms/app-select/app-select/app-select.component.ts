import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

export type AppSelectOptionType = { value: string; viewValue: string | number };

@Component({
  selector: "app-select",
  templateUrl: "./app-select.component.html",
})
export class AppSelectComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string = "";
  @Input() group: FormGroup;
  @Input() options: AppSelectOptionType[];
  control: AbstractControl;

  constructor() {}

  ngOnInit() {
    if (!this.group.controls || !this.group.controls[this.name]) throw new Error("Control missing");

    this.control = this.group.controls[this.name];
  }
}
