import { HttpResponse } from '@angular/common/http';
import { Component, OnInit , ElementRef , ViewChild } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import {BreakpointObserver} from  '@angular/cdk/layout';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
constructor(private formBuilder :FormBuilder, private api :ApiService, private router :Router,private loaderService: LoaderService) { }

  ngOnInit(): void {
  
  }

  addLogin(Users:any , pass :any)
  {
       this.api.AuthenticateUserCred(Users,pass).subscribe({
      next:(data:any)=>{
        localStorage.setItem("userToken",data.access_token);
        this.router.navigate(['/home']);
      },
      error:()=>{
        this.isLoginError =true;
        alert('Invalid login Details');
      }
      
    });
  }

 }