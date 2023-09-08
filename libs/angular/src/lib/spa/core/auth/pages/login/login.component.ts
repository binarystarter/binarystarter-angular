import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { object, string, z } from 'zod';
import { AppValidatorService } from '../../../app-forms/app-validator.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { toLower } from 'lodash';
import { AuthPaths } from '../../auth.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;
  authPaths = AuthPaths;

  constructor(
    private router: Router,
    private authService: AuthService,
    private validatorService: AppValidatorService,
  ) {
    const validation = {
      email: string()
        .email('Invalid Email address')
        .nonempty('Email is required.'),
      password: string().nonempty('Password is required.'),
    };

    const zodValidation = object(validation);
    type LoginFormType = z.infer<typeof zodValidation>;
    this.form = new FormGroup(
      {
        email: new FormControl<LoginFormType['email']>('', {
          validators: this.validatorService.control('email', validation),
        }),
        password: new FormControl<LoginFormType['password']>('', {
          validators: this.validatorService.control('password', validation),
        }),
      },
      {
        updateOn: 'blur',
        validators: [],
      },
    );
  }

  login = async () => {
    const res = await this.authService.login(
      toLower(this.form.value['email']),
      this.form.value['password'],
    );

    if (res.success) {
      await this.router.navigate(['/app']);
    }

    return res;
  };
}
