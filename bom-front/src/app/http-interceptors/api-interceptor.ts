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
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../global/dialog/dialog.component';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private _globalService: GlobalService,
    private _matDialog: MatDialog
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/')) {
      const token = localStorage.getItem('token') || undefined;
      let headers = req.headers;

      if (
        req.url.startsWith('/auth/') ||
        (req.url.startsWith('/posts') && req.method === 'GET') ||
        (req.url.startsWith('/products') && req.method === 'GET')
      ) {
        headers = req.headers.append(
          'Authorization',
          this._globalService.apiKey
        );
      } else if (token) {
        headers = req.headers.append('Authorization', token);
      }
      const apiReq = new HttpRequest(
        req.method,
        `${this._globalService.apiUrl}${req.url}`,
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
              localStorage.setItem('admin', event.body.user.admin);
            }
          }
        }),
        catchError((err) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this._matDialog.open(DialogComponent, {
              disableClose: true,
              autoFocus: true,
              data: {
                title: 'Information importante !',
                description: err.error.error,
              },
            });
            if (err.status === 403) {
              localStorage.removeItem('token');
              localStorage.removeItem('admin');
            }
            if (err.status === 401) {
              this._router.navigate(['/connexion']);
            }
          }
          return of(err);
        })
      );
    }
    return next.handle(req);
  }
}
