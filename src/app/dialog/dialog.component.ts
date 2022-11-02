import { NgIfContext } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn : string = "Save";
  actionWord : string = "Create New Ticket";

  isLoading: Subject<boolean> = this.loaderService.isLoading;


  constructor(private formBuilder:FormBuilder , private api : ApiService,   
     private dialogRef : MatDialogRef<DialogComponent>, private loaderService: LoaderService,@Inject(MAT_DIALOG_DATA) public editData :any ) { }

     public TicketInfo :any;

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({

      title : ['', Validators.required],
      description : ['', Validators.required],
      department : ['', Validators.required],
      filename :['ee',Validators.required],
      applicantname: [sessionStorage.getItem("userLoginName")],
      applicantphone :['ee'],
      email:[sessionStorage.getItem("usermail")]      
  });

  if(this.editData){
    this.actionBtn ="View Ticket Messages";
    this.actionWord ="View";
    this.productForm.controls['title'].setValue(this.editData.title);
    this.productForm.controls['description'].setValue(this.editData.description);
    this.productForm.controls['department'].setValue(this.editData.department);
    
   }
}


addProduct(){

  if(!this.editData)
  {
    if(this.productForm.valid){
      this.api.addTicket(this.productForm.value).subscribe({
       next:(res) => {
             alert("Ticket Created Successfully !");
             this.productForm.reset;
             this.dialogRef.close("Save");
           
       },
       error:(res) =>{
         alert("ooPPs !, this request cannot be processed right now");
         console.log(res);
       }
       
      });  
     }
  }
}
   
  
}