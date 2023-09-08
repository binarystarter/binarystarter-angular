import { Component, Input, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SubmitFormDirective } from "../submit-form/submit-form.directive";

@Component({
  selector: "app-submit-button",
  templateUrl: "./submit-button.component.html",
  styleUrls: ["./submit-button.component.css"],
})
export class SubmitButtonComponent {
  loading: boolean = false;
  @ViewChild(SubmitFormDirective) appSubmitForm: SubmitFormDirective;
  @Input() height: string = "";
  @Input() form: FormGroup;
  @Input() successMessage: string;
  @Input() submitFn: () => Promise<any>;
  @Input() disabled: boolean = false;

  toggleLoading(loading: boolean) {
    this.loading = loading;
  }

  async onEnterKey() {
    if (this.appSubmitForm) {
      await this.appSubmitForm.submitForm();
    }
  }

  constructor() {}
}
