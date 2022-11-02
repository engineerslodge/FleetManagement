import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

   LoggedInUserName : any;
   userRole  : any;
  constructor(private route : Router) { }

  ngOnInit(): void {
      if(sessionStorage.getItem("userLoginName") != null)
      {
          this.LoggedInUserName = sessionStorage.getItem("userLoginName");
          this.userRole = sessionStorage.getItem("Role");
          
      }
      
  }

  Logout()
  {
    localStorage.removeItem("userToken");
    localStorage.removeItem("Email");
    sessionStorage.removeItem("Role");
    sessionStorage.removeItem("userLoginName");
    this.route.navigate(["/login"]);
  }

}
