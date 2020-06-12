import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from 'app/services/auth/auth.service';

import { map } from 'rxjs/operators';
// import { SnackBarService } from 'app/services/snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(
    private _router: Router,
    // private _authService: AuthService,
    // private _snackBar: SnackBarService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(`Don't care`);
      this._router.navigate(['/']);
      return true;
  }

}
