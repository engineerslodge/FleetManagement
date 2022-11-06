import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarApplyDialogComponent } from '../car-apply-dialog/car-apply-dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-carshop',
  templateUrl: './carshop.component.html',
  styleUrls: ['./carshop.component.scss']
})
export class CarshopComponent implements OnInit {

  constructor(public api:ApiService , public dialog : MatDialog) { }
  carshop :any;
  photoFileName  : any;
  photoUrl : any;
  ngOnInit(): void {
    this.GetCarShop();
    // console.log(this.nameKey.nativeElement.value);
  }


  GetCarShop()
  {
    this.api.GetCarShop().subscribe((data:any)=>{
      this.carshop= data;  
    });
  }

  GetImage(filename:string)
  {
    var image = this.api.carPhotoUrl+filename;

    if(image !=null)
    return image;
    else 
    return 'assets/img/profile-img.jpg';

  }

  setDefaultPic()
  {
    this.photoUrl = 'assets/img/profile-img.jpg';
  }

 Apply(id:any){ 
    this.dialog.open(CarApplyDialogComponent,{
      width:"50%",
      data : id
    })

 }
 
}
