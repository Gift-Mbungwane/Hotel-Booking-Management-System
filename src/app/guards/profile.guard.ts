import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private _authService: AuthenticationService,
    private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   
      if (this._authService.isProfile) {
        // console.log('true')
        this._authService.isProfile();
        return true
      } else {           
         this._router.navigate(['/login'])
        return false
      }
  }
  
}
