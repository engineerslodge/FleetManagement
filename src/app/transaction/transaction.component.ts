import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { TransDialogComponent } from '../trans-dialog/trans-dialog.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(public api: ApiService, private dialog :MatDialog) { }

  trans : any;
  ngOnInit(): void {

    this.getTransaction();
  }

  getTransaction ()
  {

   var params =sessionStorage.getItem("usermail");  
   this.api.customerTransaction(params).subscribe((data:any)=>{
   this.trans =data;
   
   });

  }

  TransHistory(ids:any)
  {    
   var params =sessionStorage.getItem("usermail");  
   this.api.customerTransactionByHistory(ids,params).subscribe((data:any)=>{
    this.dialog.open(TransDialogComponent,{
      width:'50%',
      data: data
    })   
   });

  }

}
