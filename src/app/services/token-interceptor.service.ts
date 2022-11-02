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
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router : Router , private inject:Injector , private loaderService:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let authServices = this.inject.get(ApiService);
   let jwtToken = req.clone({
    setHeaders:{
      Authorization : "bearer "+authServices.getToken()
    }
   });
   
   
   
   return next.handle(jwtToken).pipe( tap (()=>{},
   (err: any) =>{
    if(err instanceof HttpErrorResponse){
      if(err.status !== 401){
        return;
      }
      else{
        localStorage.removeItem('userToken');
        sessionStorage.removeItem('usermail');
        sessionStorage.removeItem('Role');
        sessionStorage.removeItem('userLoginName');
      this.router.navigate(['login']);
      }
    }
   }));
   





  }

  

  

}
