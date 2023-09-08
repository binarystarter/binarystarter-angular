import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./app-form.component.html",
})
export class AppFormComponent {
  @Input() class: string = "";
  @Input() padding: string = "px-8 pt-6 pb-6";
  @Input() margin: string = "mb-4";
  @Input() group: FormGroup;
}
