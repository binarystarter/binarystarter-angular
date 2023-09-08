import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import {
  IErrorResponse,
  ISuccessResponse,
  SuccessMessagePayload,
} from '@binarystarter-angular/shared-types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appSubmitForm]',
  exportAs: 'appSubmitForm',
})
export class SubmitFormDirective implements AfterViewInit {
  @Input() form: FormGroup;
  @Input() successMessage: string;
  @Input() submitFn: () => Promise<any>;
  @Output() loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false,
  );

  constructor(
    private submitBtnEl: ElementRef<HTMLElement>,
    private _snackBar: MatSnackBar,
  ) {
    this.submitBtnEl.nativeElement.classList.add('app-submit-button');
  }

  ngAfterViewInit() {
    // styling detail when replacing the button content with the loading animation
    // keep the button the same width it was before applying the loading animation
    const el = this.submitBtnEl.nativeElement;

    const currentWidth = el.style.minWidth
      ? parseInt(el.style.minWidth.replace('px', ''))
      : 0;

    if (currentWidth < el.offsetWidth) {
      el.style.minWidth = `${el.offsetWidth}px`;
    }
  }

  async externalTriggerSubmit() {
    await this.submitForm();
  }

  @HostListener('click')
  async submitForm() {
    const isLoading = await firstValueFrom<boolean>(this.loadingSubject);
    if (isLoading) {
      return;
    }

    this.loadingSubject.next(true);

    if (this.form.invalid) {
      console.error('Invalid Form');
      this.form.markAllAsTouched();
      this.loadingSubject.next(false);
      return;
    }

    try {
      const response:
        | ISuccessResponse<SuccessMessagePayload | any>
        | IErrorResponse = await this.submitFn();

      if (!response) return;

      if (!response.success) {
        let genericError: string | null = null;

        response.payload.map(({ field, message }) => {
          if (field && this.form.controls[field]) {
            this.form.controls[field].setErrors(
              { [field]: [message] },
              { emitEvent: true },
            );
          } else if (!genericError) {
            genericError = message;
          }
        });

        if (genericError)
          this._snackBar.open(genericError, '', {
            panelClass: 'error',
            duration: 4000,
          });
      } else {
        if (this.successMessage || response.payload?.message) {
          this._snackBar.open(
            this.successMessage || response.payload?.message,
            '',
            {
              panelClass: 'success',
              duration: 4000,
            },
          );
        }
      }
    } catch (errorsRes) {
      const e = errorsRes as any;
      const somethingWentWrong = 'Sorry, something went wrong';

      this._snackBar.open(
        e.error && e.error.errors && e.error.errors.length
          ? e.error.errors[0].message || somethingWentWrong
          : somethingWentWrong,
        '',
        {
          panelClass: 'error',
          duration: 4000,
        },
      );
    } finally {
      this.loadingSubject.next(false);
    }
  }
}
