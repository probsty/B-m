import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
// import { AuthService } from 'app/services/auth/auth.service';

import { map } from 'rxjs/operators';
import { UsersService } from '../services/users/users.service';
// import { SnackBarService } from 'app/services/snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _userService: UsersService // private _authService: AuthService, // private _snackBar: SnackBarService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('logged in guard');
    this._userService.getCurrentUser().subscribe(
      (user) => {
        console.log('loggeed guard user data ', user);

        user.admin = true;

        if (!user.admin) {
          this._router.navigate(['/connexion']);
        }
      },
      (error) => {
        this._router.navigate(['/connexion']);
      }
    );
    return true;
  }
}
