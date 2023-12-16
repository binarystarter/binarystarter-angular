import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ZodAny } from 'zod';

@Injectable({ providedIn: 'root' })
export class AppValidatorService {
  constructor() {}

  /**
   * Validates a form control using zod.
   *
   * @param field
   * @param zodSchema
   * @param otherValidators
   * @returns ValidationErrors | null
   */
  public control(
    field: string,
    zodSchema: Record<string, ZodAny | any>,
    otherValidators: ValidatorFn[] | null = null,
  ): ValidatorFn[] {
    return [
      (control: AbstractControl) => {
        const zod = zodSchema[field] as ZodAny; // this should always be zod type for this field name

        const response = zod.safeParse(control.value);

        if (response.success) return null;

        if (response && response['error']) {
          const errorMessages = response['error'].flatten().formErrors;

          return { [field]: errorMessages };
        }

        return null;
      },
      ...(otherValidators || []),
    ];
  }

  setFieldError(
    field: AbstractControl | null,
    fieldName: string,
    errorMessage: string,
  ) {
    if (!field) return;

    field.setErrors({
      [fieldName]: [errorMessage],
    });
  }
}
