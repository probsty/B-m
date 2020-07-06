import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ObservableInput, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GlobalService } from '../global/global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isConnected: BehaviorSubject<any>;

  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService,
    private _router: Router
  ) {

    // is triggered when user get connected or disconnected
    this.isConnected = new BehaviorSubject({});
  }

  createUser(data: object): Observable<any> {
    return this._http.post('/auth/local', data);
  }

  login(username: string, password: string): Observable<any> {
    return this._http.post<any>('/auth/local', {
      identifier: username,
      password,
    });
  }

  loginGoogle(googleToken: string): Observable<any> {
    return this._http.post<any>('/auth/google', {
      google_token: googleToken,
    });
  }

  loginFacebook(facebookToken: string): Observable<any> {
    return this._http.post<any>('/auth/facebook', {
      facebook_token: facebookToken,
    });
  }

  disconnect(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this._router.navigate(['/']);
  }
}
