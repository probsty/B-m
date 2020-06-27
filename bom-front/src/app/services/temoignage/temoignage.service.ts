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

  addTemoignage({ title, content }): Observable<any> {
    return this._http.post<any>(`/posts`, {
      tags: ['temoignage'],
      title,
      content,
    });
  }

  getAll(): Observable<any> {
    return this._http.get<any>(`/posts`);
  }

  editTemoignage({ id, title, content }): Observable<any> {
    return this._http.put<any>(`/posts/${id}`, {
      tags: ['temoignage'],
      title,
      content,
    });
  }

  deleteTemoignage(temoignageId: string): Observable<any> {
    return this._http.delete(`/posts/${temoignageId}`);
  }
}
