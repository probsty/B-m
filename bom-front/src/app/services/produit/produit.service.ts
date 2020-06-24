import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ObservableInput } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService
  ) {}

  getAllProducts(): Observable<any> {
    return this._http.get<any>(`${this._globalService.urlApi}/products`);
  }
}
