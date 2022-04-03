import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthenticationService } from '../services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

  // userData: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    public authenticationService: AuthenticationService
    // public angularFireAuthenticantion: AngularFireAuth
    ) { }

  ngOnInit() {
      // this.angularFireAuthenticantion.authState.subscribe((user) => {
      //   if (user) {
      //     this.userData = user;
      //     localStorage.setItem('user', JSON.stringify(this.userData));
      //     JSON.parse(localStorage.getItem('user'));
      //   } else {
      //     localStorage.setItem('user', null);
      //     JSON.parse(localStorage.getItem('user'));
      //   }
      // });
   }

  //  gettoken(){  
  //   return localStorage.getItem("user");  
  //   } 

}
