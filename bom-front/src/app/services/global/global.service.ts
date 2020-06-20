import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  urlApi = 'http://localhost:3000/api';

  constructor() {}
}
