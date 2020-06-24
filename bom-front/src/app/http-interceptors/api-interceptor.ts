import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GlobalService } from '../services/global/global.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _globalService: GlobalService) {}

  key = 'M8uqVtkmHWAV3K2PaSZYLKkHWqeCWd22cxGNPXYnpqeT3US';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('ATT', req);
    if (req.url.startsWith('/')) {
      console.log('ATT');
      const token = localStorage.getItem('token') || undefined;
      let headers = req.headers;
      if (token) {
        headers = req.headers.append('Authorization', token);
      }
      const apiReq = new HttpRequest(
        req.method,
        `${this._globalService.urlApi}${req.url}`,
        req.body,
        {
          headers,
          reportProgress: req.reportProgress,
          params: req.params,
          responseType: req.responseType,
          withCredentials: req.withCredentials,
        }
      );
      return next.handle(apiReq).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            if (event.body && event.body.access_token) {
              localStorage.setItem('token', event.body.access_token);
            }
          }
        }),
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
              localStorage.removeItem('token');
              if (!req.url.startsWith('/reset-password/')) {
                this._router.navigate(['/connexion']);
              }
            }
            if (err.status === 401) {
              // this._snackBar.errorMessage({translate: 'NOT_ALLOWED'});
              console.log('not allowed on interceptor');
              this._router.navigate(['/']);
            }
          }
          return of(err);
        })
      );
    }
    console.log('return next handle');
    return next.handle(req);
  }
}
