import { NgIfContext } from '@angular/common';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService  implements HttpInterceptor {

  constructor(private router : Router , private inject:Injector , private loaderService:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide()),
);
  }
}
