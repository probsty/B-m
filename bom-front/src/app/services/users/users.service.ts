import { Injectable } from '@angular/core';
import { Observable, of, ObservableInput } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService
  ) {}

  deleteUser(userId: string): Observable<any> {
    return this._http.delete(`${this._globalService.urlApi}/users/${userId}`);
  }

  toggleAdminRight({ id, admin, ...user }): Observable<any> {
    return this._http.put<any>(`${this._globalService.urlApi}/users/${id}`, {
      admin: !admin,
      ...user,
    });
  }

  setVerifiedStatus({ id, ...user }): Observable<any> {
    return this._http.put<any>(`${this._globalService.urlApi}/users/${id}`, {
      verified: true,
      ...user,
    });
  }

  editUser({ id, ...user }): Observable<any> {
    return this._http.put<any>(`${this._globalService.urlApi}/users/${id}`, {
      ...user,
    });
  }
}
