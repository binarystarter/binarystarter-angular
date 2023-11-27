import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppValidatorService } from '../../../app-forms/app-validator.service';
import { object, string, z } from 'zod';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { AuthPaths } from '@binarystarter-angular/shared-constants';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: [],
})
export class ResetComponent {
  form: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private validatorService: AppValidatorService,
    private authService: AuthService,
  ) {
    const validation = {
      password: string()
        .min(8, 'Password must be minimum 8 characters')
        .nonempty('Password is required.'),
    };

    const zodValidation = object(validation);
    type ForgotPasswordFormType = z.infer<typeof zodValidation>;
    this.form = new FormGroup({
      password: new FormControl<ForgotPasswordFormType['password']>('', {
        validators: this.validatorService.control('password', validation),
      }),
    });
  }

  resetPassword = async () => {
    const newPassword = this.form.value['password'];
    const token = this._route.snapshot.paramMap.get('token');

    if (!token) {
      await this._router.navigate(['/']);
      return '';
    }

    const res = await this.authService.resetPassword(token, newPassword);

    await this._router.navigate([AuthPaths.login]);

    return res;
  };
}
