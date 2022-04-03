import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  booking: any;
  uid: any;

  bookings = [
    this.angularFireAuthenticantion.onAuthStateChanged((user) => {
      if (user) {
        return this.angularFirestore
          .collection('rooms')
          .ref.where('roomUid', '!=', user.uid)
          .onSnapshot((documentSnap) => {
            documentSnap.docs.map((document) => {
              document.data();
              console.log(document.data());
            });
          });
      }
    }),
  ];

  constructor(
    public router: Router,
    public angularFirestore: AngularFirestore,
    public angularFireAuthenticantion: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.bookings;
    this.getRooms();
  }

  setBooking(booking: any) {
    this.booking = booking;
  }

  getRooms() {
    this.angularFireAuthenticantion
      .onAuthStateChanged((user) => {
        if (user) {
          this.uid = user.uid;
          return this.angularFirestore
            .collection('rooms')
            .snapshotChanges()
            .subscribe((response) => {
              this.booking = response;
              console.log(JSON.stringify(response));
            });
        } else {
        }
      })
      .then(() => {})
      .catch((error) => {
        alert('unable to locate booking details');
      });
  }
}
