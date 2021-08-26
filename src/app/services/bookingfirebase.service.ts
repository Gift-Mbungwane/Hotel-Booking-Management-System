import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingfirebaseService {

  constructor(public firestore: AngularFirestore) {

  }

  create_NewCustomer(Record) {
    return this.firestore.collection('Customer').add(Record);
  }
}
