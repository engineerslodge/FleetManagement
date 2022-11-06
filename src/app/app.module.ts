import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './navigation/navigation.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { AgreementComponent } from './agreement/agreement.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransDialogComponent } from './trans-dialog/trans-dialog.component';
import { CarApplicationComponent } from './car-application/car-application.component';
import { CarshopComponent } from './carshop/carshop.component';
import { CardialogComponent } from './cardialog/cardialog.component';
import { CarApplyDialogComponent } from './car-apply-dialog/car-apply-dialog.component';
import { FlutterwaveModule  } from "flutterwave-angular-v3";

@NgModule({ 
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavigationComponent,
    DialogComponent,
    AgreementComponent,
    TransactionComponent,
    TransDialogComponent,
    CarApplicationComponent,
    CarshopComponent,
    CardialogComponent,
    CarApplyDialogComponent,
  ],
  imports: [
    BrowserModule,
    FlutterwaveModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatChipsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatOptionModule,
    MatInputModule


  
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true},{provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
 