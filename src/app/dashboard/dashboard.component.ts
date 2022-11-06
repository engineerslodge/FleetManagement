import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public UserDataClaims : any;
  public userInfo :any;
  public tokens : any;
  public TicketInfo :any;
  public ModalTitle :any;

 

  ActivateButton :boolean=false;
  constructor(private router : Router, public api: ApiService, private dialog : MatDialog) {}
    //Add this

  ngOnInit(): void {    
   
   this.getUserCredentials();
 
  }
  
getUserCredentials()
  { 
    this.api.getUserCred().subscribe((data:any)=>{
    this.UserDataClaims = data;   
    sessionStorage.setItem("usermail",data.Email);
    
   this.getUserFullProfile ();
    });  

  }
 getUserFullProfile ()
 {
  var params =sessionStorage.getItem("usermail");  
  this.api.getUserInfor(params).subscribe((data:any)=>{
    this.userInfo =data;

    // comming from an array of web api data , sort out information
    let regType = this.userInfo.map( (item: { regType: any; }) => item.regType);
    let nameofUser  = this.userInfo.map((item: { Fullname: any; }) => item.Fullname);

    sessionStorage.setItem("Role",regType);
    sessionStorage.setItem("userLoginName", nameofUser);

  this.getTicketInfo();

  });
 }

 GetImage(filename :string)
 {
  var image = this.api.carPhotoUrl+filename;
  if( image != null)
  return image;
  else 
  return 'assets/img/profile-img.jpg'; 

 }

 getTicketInfo ()
 {
  var params =sessionStorage.getItem("usermail");  
  this.api.getUserTicketInfo(params).subscribe((data:any)=>{
    this.TicketInfo =data;
  });
}

openDialog() {
  this.dialog.open(DialogComponent,{
    width:"50%"
  }).afterClosed().subscribe(val =>{
    if(val =="Save")
    {
      this.getTicketInfo();
    }
 });  // refresh page
}

deleteTicket(id:any)
{
   this.api.deleteTicket(id).subscribe({
    next:(res) => {
          alert("Ticket Deleted Successfully !");
         this.getTicketInfo();
    },
    error:(res) =>{
      alert("ooPPs !, this request cannot be processed right now");
      console.log(res);
    }
    
   });  
}

viewTicket(id:any)
{
  this.dialog.open(DialogComponent,{
    width:'80%',
    data: id
  }).afterClosed().subscribe(val=>{
    if(val === 'View')
  {
   this.getTicketInfo();
  } });
}



}
