import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValidatorService } from './app-validator.service';
import { AppInputComponent } from './app-input/app-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './app-form/app-form.component';
import { SubmitFormDirective } from './submit-form/submit-form.directive';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { AppLayoutModule } from '../../../layout/layout.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppSelectComponent } from './app-select/app-select/app-select.component';
import { MatSelectModule } from '@angular/material/select';
import { AppCheckboxComponent } from './app-checkbox/app-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppNumberInputComponent } from './app-number-input/app-number-input.component';
import { AppTextareaComponent } from './app-textarea/app-textarea.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    AppInputComponent,
    AppFormComponent,
    SubmitFormDirective,
    SubmitButtonComponent,
    AppSelectComponent,
    AppCheckboxComponent,
    AppNumberInputComponent,
    AppTextareaComponent,
  ],
  providers: [AppValidatorService],
  imports: [
    MatSnackBarModule,
    AppLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    UtilsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [
    AppInputComponent,
    AppFormComponent,
    SubmitFormDirective,
    SubmitButtonComponent,
    AppSelectComponent,
    AppCheckboxComponent,
    AppNumberInputComponent,
    AppTextareaComponent,
  ],
})
export class AppFormsModule {}
