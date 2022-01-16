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

  ngOnInit() {
    this.getProfile();
    this.getBookings();
  }

  getProfile() {
    this.angularFireAuthentication
      .onAuthStateChanged((user) => {
        if (user) {
          this.uid = user.uid;
          return this.angularFirestore
            .collection('users')
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
            .collection('bookings')
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
