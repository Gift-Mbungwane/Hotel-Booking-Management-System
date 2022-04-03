import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  profile: any;
  uid: any;
  booking: any;

  constructor(
    public authenticationService: AuthenticationService,
    public angularFireAuthentication: AngularFireAuth,
    public angularFirestore: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.getProfile();
    this.getBookings();
  }

  getProfile() {
    this.angularFireAuthentication
      .onAuthStateChanged((user) => {
        if (user) {
          this.uid = user.uid;
          return this.angularFirestore
            .collection('users').doc(user.uid).collection("user")
            .snapshotChanges()
            .subscribe((response) => {
              this.profile = response;
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

  getBookings() {
    this.angularFireAuthentication
      .onAuthStateChanged((user) => {
        if (user) {
          this.uid = user.uid;
          return this.angularFirestore
            .collection('bookings').doc(user.uid).collection("book")
            .snapshotChanges()
            .subscribe((response) => {
              this.booking = response;
              console.log(JSON.stringify(response));
            });
        } else {
        }
      })
      .then((res) => {})
      .catch((error) => {
        alert('unable to locate booking details');
      });
  }
}
