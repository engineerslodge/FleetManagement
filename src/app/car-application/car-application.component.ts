import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardialogComponent } from '../cardialog/cardialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-car-application',
  templateUrl: './car-application.component.html',
  styleUrls: ['./car-application.component.scss']
})
export class CarApplicationComponent implements OnInit {
carapply: any;
  constructor(public api:ApiService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCarApplication();
  }

  getCarApplication()
  { 
    var params =sessionStorage.getItem("usermail");  
    this.api.customerCarApply(params).subscribe((data:any)=>{
    this.carapply =data;
  });

  }
  TransHistory(id:any)
  {
         this.dialog.open(CardialogComponent,{
       width:'50%',
       data: id
     })  ;
  }
}
