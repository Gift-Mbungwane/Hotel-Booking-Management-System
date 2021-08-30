import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PaymentComponent } from "../payment/payment.component";
import { RoomDetailsComponent } from "./room-details.component";



@Component({
  selector: 'app-room-details',
  template: `
<h1 mat-dialog-title>Hi {{data.email}}</h1>
<div mat-dialog-content>
  <p>Your Chosen room</p>
  
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No Thanks</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>

`,
})

export class bookingDialogComponent {

  public paymentCaller: PaymentComponent;

  constructor(public dialogRef: MatDialogRef<bookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoomDetailsComponent) { }

  paymentOption() {
    return this.paymentCaller.invokeStripe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
