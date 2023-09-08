import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { z } from 'zod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: FormGroup;
  validationZod;

  constructor(private registerService: RegisterService) {
    this.form = this.registerService.formGroup;

    this.validationZod = this.registerService.validationZod;
  }

  register = async () => {
    const formData = this.form.getRawValue() as z.infer<
      typeof this.validationZod
    >;
    const res = await this.registerService.signUp(formData);

    if (res.success) {
      localStorage.setItem('email', formData.email);
      this.form.reset();
    }

    return res;
  };
}
