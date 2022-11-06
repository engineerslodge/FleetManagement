import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cardialog',
  templateUrl: './cardialog.component.html',
  styleUrls: ['./cardialog.component.scss']
})
export class CardialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData :any ) { }
  public TicketInfo :any;
  ngOnInit(): void {
    if(this.editData){      
      this.TicketInfo =this.editData;      
     }
  }

}
