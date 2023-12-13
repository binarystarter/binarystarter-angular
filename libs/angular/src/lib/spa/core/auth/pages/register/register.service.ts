import { Injectable } from '@angular/core';
import { object, string, z } from 'zod';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AppValidatorService } from '../../../app-forms/app-validator.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly _validation;
  private readonly _validationZod;

  constructor(
    private validatorService: AppValidatorService,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this._validation = {
      username: string().min(1, 'Username must be set'),
      email: string()
        .email('Invalid Email address')
        .min(1, 'Email is required.'),
      password: string()
        .min(8, 'Password must be minimum 8 characters')
        .min(1, 'Password is required.'),
      confirmPassword: string()
        .min(8, 'Password must be minimum 8 characters')
        .min(1, 'Confirm Password is required.'),
      firstName: string().min(1, 'Please type your first name'),
      lastName: string().min(1, 'Please type your last name'),
    };

    this._validationZod = object(this._validation);
  }

  async signUp(data: z.infer<typeof this._validationZod>) {
    return this.authService.register<z.infer<typeof this._validationZod>>(data);
  }

  get validationZod() {
    return this._validationZod;
  }

  get formGroup() {
    type RegisterFormType = z.infer<typeof this._validationZod>;

    return new FormGroup(
      {
        username: new FormControl<RegisterFormType['username']>('', {
          validators: this.validatorService.control(
            'username',
            this._validation
          ),
        }),
        email: new FormControl<RegisterFormType['email']>('', {
          validators: this.validatorService.control('email', this._validation),
        }),
        password: new FormControl<RegisterFormType['password']>('', {
          validators: this.validatorService.control(
            'password',
            this._validation
          ),
        }),
        confirmPassword: new FormControl<RegisterFormType['confirmPassword']>(
          '',
          {
            validators: this.validatorService.control(
              'confirmPassword',
              this._validation
            ),
          }
        ),
        firstName: new FormControl<RegisterFormType['firstName']>('', {
          validators: this.validatorService.control(
            'firstName',
            this._validation
          ),
        }),
        lastName: new FormControl<RegisterFormType['lastName']>('', {
          validators: this.validatorService.control(
            'lastName',
            this._validation
          ),
        }),
      },
      {
        updateOn: 'blur',
        validators: [
          (form: AbstractControl) => {
            const password = form.get('password');
            const confirmPassword = form.get('confirmPassword');

            if (password?.value !== confirmPassword?.value) {
              this.validatorService.setFieldError(
                confirmPassword,
                'confirmPassword',
                'Confirmed password is different from the password. Please fix it.'
              );
            }

            return null;
          },
        ],
      }
    );
  }
}
