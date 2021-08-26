import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payment: PaymentComponent;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.loadPayment();
  }

  loadPayment() {
    this.payment.invokeStripe;
  }
}
