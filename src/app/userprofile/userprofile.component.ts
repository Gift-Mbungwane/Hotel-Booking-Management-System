import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
