import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';


@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

    ngOnInit() {
      
    }

}
