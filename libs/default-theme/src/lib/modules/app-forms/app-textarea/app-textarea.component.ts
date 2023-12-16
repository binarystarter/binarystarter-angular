import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-textarea",
  templateUrl: "./app-textarea.component.html",
})
export class AppTextareaComponent implements OnInit {
  @Input() onEnterSubmit: () => void;
  @Input() rows: number = 2;
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
