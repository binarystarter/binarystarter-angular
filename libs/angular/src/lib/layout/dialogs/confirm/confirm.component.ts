import { Component, Inject } from '@angular/core';
import { AppButtonColorTypes } from '../../app-button/app-button-types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type DataType = {
  question: string;
  description: string;
  confirmType: AppButtonColorTypes;
  confirmText: string;
  cancelType: AppButtonColorTypes;
  cancelText: string;
  onConfirm: (dialogRef: MatDialogRef<ConfirmComponent>) => void;
  onCancel: (dialogRef: MatDialogRef<ConfirmComponent>) => void;
};

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
  question: string;
  description: string;
  confirmType: AppButtonColorTypes;
  confirmText: string = 'Confirm';
  cancelType: AppButtonColorTypes;
  cancelText: string;
  onConfirm: (dialogRef: MatDialogRef<ConfirmComponent>) => void;
  onCancel: (dialogRef: MatDialogRef<ConfirmComponent>) => void;
  mediaUrl: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
  ) {
    this.question = this.data.question ?? 'Are you sure you want to do this?';
    this.description = this.data.description ?? '';
    this.confirmType = this.data.confirmType ?? 'success';
    this.cancelType = this.data.cancelType ?? 'default';
    this.cancelText = this.data.cancelText ?? 'Cancel';
    this.onConfirm = this.data.onConfirm ?? (() => {});
    this.onCancel = this.data.onCancel ?? (() => {});
  }

  confirm = () => {
    if (this.onConfirm) {
      this.onConfirm(this.dialogRef);
    } else {
      this.dialogRef.close(true);
    }
  };

  cancel = () => {
    console.log('Cancel');
    if (this.onCancel) {
      this.onCancel(this.dialogRef);
    } else {
      this.dialogRef.close(false);
    }
  };
}
