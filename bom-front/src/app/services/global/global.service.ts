import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  apiUrl = 'http://35.180.202.10:3000/api';
  apiKey = 'M8uqVtkmHWAV3K2PaSZYLKkHWqeCWd22cxGNPXYnpqeT3US';

  constructor() {}
}
