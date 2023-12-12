import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./app-input.component.html",
  styleUrls: [],
  providers: [],
})
export class AppInputComponent implements OnInit {
  @Input() onEnterSubmit: () => void = () => {};
  @Input() name: string;
  @Input() label: string = "";
  @Input() placeholder: string;
  @Input() hint: string = "";
  @Input() class: string = "";
  @Input() containerClass: string = "mb-2";
  @Input() type: "text" | "password" = "text";
  @Input() group: FormGroup;
  control: AbstractControl;

  constructor() {}

  ngOnInit() {
    if (!this.group.controls || !this.group.controls[this.name]) throw new Error("Control missing");

    this.control = this.group.controls[this.name];
  }
}
