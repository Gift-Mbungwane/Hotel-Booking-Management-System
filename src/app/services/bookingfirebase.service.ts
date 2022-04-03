import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BookingfirebaseService {
  
  customFireList: AngularFireList<any>;
  customFireObj: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}
    
      addCuctomer(customer: Customer) {
          this.customFireList = this.db.list('/lists');
           if(customer) {
            this.customFireList.push({
              email: customer.email,
              arrivalDate: customer.arrivalDate,
              departureDate: customer.departureDate,
              guests: customer.guests,
              roomType: customer.roomType
            })
           }
      }

      
  
  }

  /*create_NewCustomer(Record) {
    return this.firestore.collection('Customer').add(Record);
  }*/

