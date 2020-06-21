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

  toggleAdminRight(userId: string, isAdmin: boolean): Observable<any> {
    return this._http.put<any>(
      `${this._globalService.urlApi}/users/${userId}`,
      { admin: isAdmin }
    );
  }
}
