import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PayloadService } from '../../../../../modules/api/payload.service';
import { object, string, z } from 'zod';
import { AppValidatorService } from '../../../../../modules/app-forms/app-validator.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [],
})
export class ForgotPasswordComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private payload: PayloadService,
    private validatorService: AppValidatorService,
    private authService: AuthService
  ) {
    const validation = {
      email: string()
        .email('Invalid Email address')
        .nonempty('Email is required.'),
    };

    const zodValidation = object(validation);
    type ForgotPasswordFormType = z.infer<typeof zodValidation>;
    this.form = new FormGroup({
      email: new FormControl<ForgotPasswordFormType['email']>('', {
        validators: this.validatorService.control('email', validation),
      }),
    });
  }

  forgotPassword = async () => {
    const res = await this.authService.forgotPassword(this.form.value['email']);

    this.form.reset();

    return res;
  };
}
