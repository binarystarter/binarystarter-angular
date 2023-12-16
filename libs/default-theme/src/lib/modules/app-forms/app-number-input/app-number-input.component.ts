import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-number-input",
  templateUrl: "./app-number-input.component.html",
  styleUrls: [],
  providers: [],
})
export class AppNumberInputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string = "";
  @Input() group: FormGroup;
  control: AbstractControl;

  constructor() {}

  ngOnInit() {
    if (!this.group.controls || !this.group.controls[this.name]) throw new Error("Control missing");

    this.control = this.group.controls[this.name];
  }
}
