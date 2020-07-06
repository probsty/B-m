import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  private _unsubscribeAll: Subject<any>;
  isConnected = false;
  isAdmin = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authService: AuthService
  ) {
    this.isAdmin = localStorage.getItem('admin') === 'true' ? true : false;
    this.isConnected = !!localStorage.getItem('token');

    this._authService.isConnected.pipe().subscribe((isCon) => {
      console.log('isConnected', isCon);
      if (isCon === true || isCon === false) {
        console.log('isConnected there', isCon);
        this.isAdmin = localStorage.getItem('admin') === 'true' ? true : false;
        this.isConnected = isCon;
      }
    });
  }
}
