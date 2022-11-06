import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-trans-dialog',
  templateUrl: './trans-dialog.component.html',
  styleUrls: ['./trans-dialog.component.scss']
})
export class TransDialogComponent implements OnInit {

  constructor(public api:ApiService, @Inject(MAT_DIALOG_DATA) public editData :any) { }

  trans :any;
  ngOnInit(): void {

    if(this.editData)
    {
      this.trans = this.editData;
      console.log(this.editData);
    }
  }

 

}
