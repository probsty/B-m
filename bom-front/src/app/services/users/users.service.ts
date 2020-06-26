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

  getAll(): Observable<any> {
    return this._http.get(`/users`);
  }

  getCurrentUser(): Observable<any> {
    return this._http.get('/users/me');
  }

  deleteUser(userId: string): Observable<any> {
    return this._http.delete(`/users/${userId}`);
  }

  toggleAdminRight({ id, admin, ...user }): Observable<any> {
    return this._http.put<any>(`/users/${id}`, {
      admin: !admin,
      ...user,
    });
  }

  toggleVerified({ id, verified, ...user }): Observable<any> {
    return this._http.put<any>(`/users/${id}`, {
      verified: !verified,
      ...user,
    });
  }

  setVerifiedStatus({ id, ...user }): Observable<any> {
    return this._http.put<any>(`/users/${id}`, {
      verified: true,
      ...user,
    });
  }

  editUser({ id, ...user }): Observable<any> {
    return this._http.put<any>(`/users/${id}`, {
      ...user,
    });
  }
}
