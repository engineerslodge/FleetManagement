import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement/agreement.component';
import { AppComponent } from './app.component';
import { CarApplicationComponent } from './car-application/car-application.component';
import { CarshopComponent } from './carshop/carshop.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path : "", redirectTo: 'login', pathMatch: "full"},
  {path : "", component:HomeComponent, canActivate: [AuthGuardGuard]},
  {path : "login", component:LoginComponent},
  {path : "register", component: RegisterComponent},
  {path : "home", component: HomeComponent, canActivate: [AuthGuardGuard]},
  {path : "agreement" , component: AgreementComponent , canActivate: [AuthGuardGuard]},
  {path : "transaction", component:TransactionComponent, canActivate: [AuthGuardGuard]},
  {path : "application", component:CarApplicationComponent, canActivate:[AuthGuardGuard]},
  {path : "shop", component:CarshopComponent, canActivate:[AuthGuardGuard]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
