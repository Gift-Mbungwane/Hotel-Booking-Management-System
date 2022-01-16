import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validateTopic } from '../validators/guest.validator';
import { AuthenticationService } from '../services';
import { BookingfirebaseService } from '../services/bookingfirebase.service';

import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  isSubmitted = false;
  roomTypeHasError: boolean;
  rooms: any = ['Single', 'Double', 'Primier', 'Deluxe'];
  guests: any = [1, 2, 3, 4];
  guestHasError = true;
  //email: any;
  range: FormGroup;

  constructor(
    public authenticationService: AuthenticationService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    public bookinService: BookingfirebaseService,
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth
  ) {}

  bookingForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    phone: ['', [Validators.required]],
    roomType: ['', [Validators.required]],
    guests: ['', [Validators.required, validateTopic]],
    arrivalDate: ['', [Validators.required]],
    departureDate: ['', [Validators.required]],
  });

  validateRoomType(value: any) {
    if (value === 'default') {
      this.roomTypeHasError = true;
    } else {
      this.roomTypeHasError = false;
    }
  }

  get email() {
    return this.bookingForm.get('email');
  }
  get phone() {
    return this.bookingForm.get('phone');
  }
  get firstName() {
    return this.bookingForm.get('firstName');
  }
  get surname() {
    return this.bookingForm.get('surname');
  }

  get arrivalDate() {
    return this.bookingForm.get('arrivalDate');
  }

  get departureDate() {
    return this.bookingForm.get('departureDate');
  }

  get roomType() {
    return this.bookingForm.get('roomType');
  }

  get guest() {
    return this.bookingForm.get('guest');
  }

  addCuctomer() {
    this.angularFireAuth.onAuthStateChanged((user) => {
      //this.bookinService.addCuctomer(this.bookingForm.value);
      this.angularFirestore
        .collection('bookings')
        .add(this.bookingForm.value)
        .then((booking) => {
          booking.update({
            uuid: user.uid,
            bookingUid: booking.id,
            timeStamp: new Date(),
          });

          if (this.roomType.value == 'Single') {
            booking.update({
              price: 50,
            });
          } else if (this.roomType.value == 'Double') {
            booking.update({
              price: 80,
            });
          } else if (this.roomType.value == 'Primier') {
            booking.update({
              price: 100,
            });
          } else if (this.roomType.value == 'Deluxe') {
            booking.update({
              price: 130,
            });
          }
          alert('your desired room has been booked');
          this.closePopup();
        })
        .catch((error) => {
          const errorAlert = error.message;
          alert('Could not add booking, please check your internet connection');
        });
    });
  }

  changeRooms(e) {
    console.log(e.value);
    this.roomType.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.bookingForm.valid) {
      // alert('please fill in all the information required');
      return false;
    } else if (this.bookingForm.valid) {
      return this.openPopup();
    } else {
      alert(JSON.stringify(this.bookingForm.value));
    }
  }

  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  /* openDialog() {
    const dialogRef = this.dialog.open(bookingDialogComponent, {
      width: '550px',
      data: { email: this.bookingForm.get('email'), rooms: this.bookingForm.get('roomType') }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  */
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
