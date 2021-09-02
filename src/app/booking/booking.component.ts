import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';
import { BookingfirebaseService } from '../services/bookingfirebase.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  customer: string;
  customerFirstName: string;
  customerlastName: string;
  customerEmail: string;
  customerPhone: string;
  customerCity: string;
  customerAddress: string;
  customerAccomType: string;
  customerAreaCode: number;
  customerDateOfArival: any;
  customerNumOfAdults: number;
  customerDateOfDeparture: any;
  customerNumOfChildren: number;
  roomTypeHasError: boolean = true;
  roomTypes: ['Double Deluxe Room', 'Single Delux Room', 'Honeymoon Suit', 'Economy Double'];


  constructor(public authenticationService: AuthenticationService, private fb: FormBuilder, private bookingService: BookingfirebaseService) { }

  bookingForm = this.fb.group({
      firstName:  ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      city: [''],
      accomType: [''],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', Validators.required],
    roomTypes: [['Double Deluxe Room', 'Single Delux Room', 'Honeymoon Suit', 'Economy Double'], Validators.required],
      address: [''],
      areaCode: [''],
      adults: [''],
      children: ['']
  });

  validateRoomType(value: any) {

    if (value === "default") {
      this.roomTypeHasError = true;
    } else {
      this.roomTypeHasError = false;
    }
  }

 /* createRecord() {
    let Record = {};
    Record['Name'] = this.customerFirstName;
    Record['Surname'] = this.customerlastName;
    Record['Email'] = this.customerEmail;
    Record['Phone'] = this.customerPhone;
    Record['City'] = this.customerCity;
    Record['Address'] = this.customerAddress;
    Record['Accommodation'] = this.customerAccomType;
    Record['Code'] = this.customerAreaCode;
    Record['Date of Arriva;'] = this.customerDateOfArival;
    Record['Adults'] = this.customerNumOfAdults;
    Record['Date of Departure'] = this.customerDateOfDeparture;  
    Record['Children'] = this.customerNumOfChildren;

    this.bookingService.create_NewCustomer(Record).then(resp =>{
          this.customerFirstName = "";
          this.customerlastName = "";
          this.customerEmail = "";
          this.customerPhone = "";
          this.customerCity = "";
          this.customerAddress = "";
          this.customerAccomType = "";
          this.customerAreaCode = undefined;
          this.customerDateOfArival = "";
          this.customerNumOfAdults = undefined;
          this.customerDateOfDeparture = "";
          this.customerNumOfChildren = undefined;
          console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }*/

  ngOnInit(): void {
  }

}
