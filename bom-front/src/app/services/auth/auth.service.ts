import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ObservableInput } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService
  ) {}

  createUser(data: object): Observable<any> {
    return this._http.post(this._globalService.urlApi + '/auth/local', data);
  }

  login(username: string, password: string): Observable<any> {
    return this._http.post<any>(this._globalService.urlApi + '/auth/local', {
      username,
      password,
    });
  }
}
