import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ObservableInput, BehaviorSubject } from 'rxjs';

import { GlobalService } from '../global/global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  isConnected: BehaviorSubject<any>;

  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService,
    private _router: Router
  ) {

    // is triggered when user get connected or disconnected
    this.isConnected = new BehaviorSubject({});
  }

  createPost(title: string, content: string): Observable<any> {
    return this._http.post<any>('/journals', {
      title: title,
      content: content
    });
  }

  getAll(): Observable<any> {
    return this._http.get<any>(`/journals`);
  }

  getPost(postId: string): Observable<any> {
    return this._http.get<any>(`/journals/${postId}`);
  }

}
