import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ObservableInput } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._http.get<any>('/products');
  }
}
