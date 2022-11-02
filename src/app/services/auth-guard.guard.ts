import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {

  constructor(private service :ApiService , private route :Router){

  }
  canActivate(){
    if(this.service.isLoggedIn ())
    {
      return true;
    }
    else{
      this.route.navigate(['login']); 
      return false;
    }
  }
  
}
