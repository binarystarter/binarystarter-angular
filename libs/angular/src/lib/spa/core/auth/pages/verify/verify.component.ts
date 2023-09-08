import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayloadService } from '../../../api/payload.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { string } from 'zod';
import { AppValidatorService } from '../../../app-forms/app-validator.service';
import { toLower } from 'lodash';
import { AccountPaths } from '../../../../account/account.routes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: [],
})
export class VerifyComponent {
  registeredEmail: string | null = null;
  form: FormGroup;
  private readonly _validation;

  constructor(
    private payloadService: PayloadService,
    private authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private validatorService: AppValidatorService,
  ) {
    this.registeredEmail = localStorage.getItem('email');
    this._validation = {
      email: string()
        .email('Invalid Email address')
        .nonempty('Email is required.'),
      password: string().nonempty('Password is required.'),
    };

    this.form = new FormGroup({
      email: new FormControl<string>(this.registeredEmail ?? '', {
        validators: this.validatorService.control('email', this._validation),
      }),
      password: new FormControl<string>('', {
        validators: this.validatorService.control('password', this._validation),
      }),
    });
  }

  verifyToken = async () => {
    const formData = this.form.getRawValue();
    const email = toLower(formData.email);

    const res = await this.authService.verify(
      email,
      this._route.snapshot.queryParams['token'] ?? '',
    );

    if (res.success) {
      await this.authService.login(email, formData.password);
      this._snackBar.open('Welcome!', '', {
        panelClass: 'success',
        duration: 4000,
      });
      // remove email from localstorage after registration is complete
      localStorage.removeItem('email');
      await this._router.navigate([AccountPaths.profile]);
      return;
    } else {
      this._snackBar.open(res.payload[0].message, '', {
        panelClass: 'error',
        duration: 4000,
      });
      await this._router.navigate(['/']);
      return;
    }
  };
}
