import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PaymentComponent } from "../payment/payment.component";



@Component({
  selector: 'bookingDialog',
  template: `<h2 mat-dialog-title>Delete all elements?</h2>
<div mat-dialog-content>This will delete all elements that are currently on this page and cannot be undone.</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancel</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-button mat-dialog-close (click)="paymentOption()">pay</button>
</div>
`,
})

export class bookingDialogComponent {

  public paymentCaller: PaymentComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: bookingDialogComponent) { }

  paymentOption() {
    return this.paymentCaller.invokeStripe();
  }
  closeDialog() {
   
  }
}
