import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from "flutterwave-angular-v3"
@Component({
  selector: 'app-car-apply-dialog',
  templateUrl: './car-apply-dialog.component.html',
  styleUrls: ['./car-apply-dialog.component.scss']
 
})
export class CarApplyDialogComponent implements OnInit {
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
  PaymentForm !: FormGroup;

  //flutterwave data paramenters
  publicKey = "FLWPUBK_TEST-15c248a7a949fb389ce244fa4ab4c180-X"; 
  customerDetails = { name: 'Demo Customer  Name', email: 'anuoluwapoadeniji@gmail.com', phone_number: '08188193841'} 
  customizations = {title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-colored.svg'} 
  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}



  constructor( private formBuilder:FormBuilder , public api :ApiService , private flutterwave : Flutterwave) { }

  ngOnInit(): void {
    // this.PaymentForm = this.formBuilder.group({
   
    //     public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    //     tx_ref: "titanic-48981487343MDI0NzMx",
    //     amount: 54600,
    //     currency: "NGN",
    //     payment_options: "card, banktransfer, ussd",
    //     redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    //     meta: {
    //       consumer_id: 23,
    //       consumer_mac: "92a3-912ba-1192a",
    //     },
    //     customer: {
    //       email: "rose@unsinkableship.com",
    //       phone_number: "08102909304",
    //       name: "Rose DeWitt Bukater",
    //     },
    //     customizations: {
    //       title: "The Titanic Store",
    //       description: "Payment for an awesome cruise",
    //       logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    //     },
      


    // });   
  }

  paymentData: InlinePaymentOptions = {
    public_key: this.publicKey,
    tx_ref: this.generateReference(),
    amount: 0,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url: '',
    meta: this.meta,
    customer: this.customerDetails,
    customizations: this.customizations,
    callback: this.makePaymentCallback,
    onclose: this.closedPaymentModal,
    callbackContext: this
  }

  makePayment(){
    this.flutterwave.inlinePay(this.paymentData)
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Payment callback", response);
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
 
 
}