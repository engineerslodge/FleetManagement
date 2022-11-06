import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly rootURL ="http://localhost:33249/";
  readonly carPhotoUrl ="http://localhost:33249/carphotos/";
  readonly Flutterwave ="https://checkout.flutterwave.com/v3/hosted/pay";

  constructor(private http : HttpClient) { }


  registerClient(data : any){
    return this.http.post<any>( this.rootURL+"api/user/register/",data);
  }

  AuthenticateUserCred(username:any , Password: any)
  {
    var data = "username="+username+"&password="+Password+"&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type':'application/x-www-urlencoded' });
    return this.http.post(this.rootURL+'token',data,{headers : reqHeader});

  }
  getUserCred()
  {
    return this.http.get(this.rootURL+'api/getUserClaims',{headers: new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('userToken') })});
  }

  //parameter passing using (+ sign)
  getUserInfor(data:any)
  {
    return this.http.get(this.rootURL+'api/service/email?username='+data);
  
  }
  getUserTicketInfo(data:any)
  {
    return this.http.get(this.rootURL+'api/service/ticket?q='+data);
  }  

  isLoggedIn()
  {
    return localStorage.getItem('userToken') != null;
  }

  isTokenExpired(token :string)
  {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }
  getToken()
  {
    return localStorage.getItem('userToken');
  }

  logout()
  {
    localStorage.removeItem("userToken");
    window.location.reload();
  }

//post  into webapi (with comma separated)
  addTicket(data:any)
  {
    return this.http.post<any>(this.rootURL+'/api/service/createTicket', data);
  }
 
  flutterPay(data:any)
  {
    return this.http.post<any>(this.Flutterwave, data);
  }
  
  deleteTicket(data:any)
  {
    return this.http.delete<any>(this.rootURL+'/api/service/deleteTicket?id='+data);
  }

  customerTransaction (data:any)
  {
    return this.http.get<any>(this.rootURL+'/api/service/customerTransaction?id='+data);
  
  }

  customerCarApply (data:any)
  {
    return this.http.get<any>(this.rootURL+'/api/service/customerCarApply?id='+data);
  
  }
  GetCarShop ()
  {
    return this.http.get<any>(this.rootURL+'/api/service/getshop');
  }

  customerTransactionByHistory(id:any, email:any)
  {
    return this.http.get<any>(this.rootURL+'/api/service/customerTransactionByHistory/param?id='+id+'&email='+email);
  }

}


