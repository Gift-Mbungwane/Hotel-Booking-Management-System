import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthenticationService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.isLoggedIn) {
      // console.log('true')
      this._authService.isLoggedIn();
      return true
    } else  {
      console.log('false')            
       this._router.navigate(['/login'])
      return false
    }
  }
}
