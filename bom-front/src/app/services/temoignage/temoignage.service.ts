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

  addTemoignage(title: string, content: string): Observable<any> {
    return this._http.post<any>(`/posts`, {
      tags: ['temoignage'],
      title,
      content,
    });
  }

  getAllTemoignage(): Observable<any> {
    return this._http.get<any>(`/posts`);
  }

  updateTemoignage(
    id: string,
    title: string,
    content: string
  ): Observable<any> {
    return this._http.put<any>(`/posts/${id}`, {
      tags: ['temoignage'],
      title,
      content,
    });
  }

  testHeader(): Observable<any> {
    return this._http.get<any>(`/posts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'M8uqVtkmHWAV3K2PaSZYLKkHWqeCWd22cxGNPXYnpqeT3US',
      },
    });
  }
}
