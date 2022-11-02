import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm !: FormGroup;
  constructor(private FormBuilders: FormBuilder , private Api : ApiService) { }

  ngOnInit(): void {
    this.RegisterForm = this.FormBuilders.group({

      FirstName :['', Validators.required],
      LastName :['', Validators.required],
      Email :['', Validators.required],
      UserName :['', Validators.required],
      Password :['', Validators.required],
      Address :['', Validators.required],
      Gender :['', Validators.required],
      State :['', Validators.required],
      City :['', Validators.required],
      Addresstype :['', Validators.required],
      gName :['', Validators.required],
      gAddress :['', Validators.required],
      gRelationship  :['', Validators.required],
      gJobtitle :['', Validators.required],
      gPhone :['', Validators.required],
      gName2 :['', Validators.required],
      gAddress2 :['', Validators.required],
      gRelationship2  :['', Validators.required],
      gJobtitle2 :['', Validators.required],
      gPhone2 :['', Validators.required],
      Phone :['', Validators.required]

    });

  }

  registerMe()
  {
        if(this.RegisterForm.valid)    {
              this.Api.registerClient(this.RegisterForm.value).subscribe({
                next:(res)=>{
                  alert("Registration Successful");

                },
                error:(res)=>
                {
                  alert(res);
                }
              })
    }
    else 
    {
      alert("All Fields Are Compulsory, Please Fill");
    }
  }

}
