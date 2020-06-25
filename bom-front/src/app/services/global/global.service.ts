import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  apiUrl = 'http://localhost:3000/api';
  apiKey = 'M8uqVtkmHWAV3K2PaSZYLKkHWqeCWd22cxGNPXYnpqeT3US';

  constructor() {}
}
