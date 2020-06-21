import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';

import { Observable, of, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemoignageService {
  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService
  ) {}

  addTemoignage(content: string): Observable<any> {
    return this._http.post<any>(`${this._globalService.urlApi}/posts`, { tags: ['temoignage'], content });
  }

}
