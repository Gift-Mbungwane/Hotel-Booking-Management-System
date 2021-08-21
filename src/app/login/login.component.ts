import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { AuthenticationService } from '../services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() { }

}
