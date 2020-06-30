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

  getAll(): Observable<any> {
    return this._http.get<any>(`/products`);
  }

  addProduct({ name, amount, price, description }): Observable<any> {
    return this._http.post<any>(`/products`, {
      //   images,
      images: [''],
      name,
      amount,
      price,
      description,
    });
  }

  editProduct({
    id,
    name,
    amount,
    price,
    description,
    ...product
  }): Observable<any> {
    return this._http.put<any>(`/products/${id}`, {
      name,
      amount,
      price,
      description,
      ...product,
    });
  }

  deleteProduct(productId: string): Observable<any> {
    return this._http.delete(`/products/${productId}`);
  }
}
