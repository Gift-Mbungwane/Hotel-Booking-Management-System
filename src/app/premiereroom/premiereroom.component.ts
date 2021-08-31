import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-premiereroom',
  templateUrl: './premiereroom.component.html',
  styleUrls: ['./premiereroom.component.css']
})
export class PremiereroomComponent implements OnInit {

  
  isSubmitted = false;
  roomTypeHasError: boolean;
  rooms: any = ['Single', 'Double', 'Primier', 'Deluxe']
  email: any;
  range: FormGroup;

  constructor(public authenticationService: AuthenticationService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog) { }

    bookingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      roomType: ['', [Validators.required]]
    });

    validateRoomType(value: any) {

      if (value === "default") {
        this.roomTypeHasError = true;
      } else {
        this.roomTypeHasError = false;
      }
    }
  
    get roomType() {
      return this.bookingForm.get('roomType');
    }
  
    changeRooms(e) {
      console.log(e.value)
      this.roomType.setValue(e.target.value, {
        onlySelf: true
      })
    }
  
    onSubmit() {
      this.isSubmitted = true;
      if (!this.bookingForm.valid) {
        return false;
      } else if (this.bookingForm.valid) {
        return this.openPopup();
      } else {
        alert(JSON.stringify(this.bookingForm.value))
      }
  
    }

  ngOnInit(): void {
    this.range =  new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
