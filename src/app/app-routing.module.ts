import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { AuthorizationguardService } from './authorizationguard.service';
import { BusDeleteComponent } from './bus-delete/bus-delete.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusComponent } from './bus/bus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { DiscountCreateComponent } from './discount-create/discount-create.component';
import { DiscountDeleteComponent } from './discount-delete/discount-delete.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountComponent } from './discount/discount.component';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { JourneyCreateComponent } from './journey-create/journey-create.component';
import { JourneyDeleteComponent } from './journey-delete/journey-delete.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { JourneyMainComponent } from './journey-main/journey-main.component';
import { JourneyComponent } from './journey/journey.component';
import { LoggedinguardService } from './loggedinguard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { TicketBookComponent } from './ticket-book/ticket-book.component';
import { TicketCancelComponent } from './ticket-cancel/ticket-cancel.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  {
    path: 'app-home', component: JourneyComponent, canActivate: [AuthguardService]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LoggedinguardService]
  },

  {
    path: 'app-myprofile', component: MyprofileComponent, canActivate: [AuthguardService],
  },
  {
    path: 'app-contact-us', component: ContactUsComponent
  },
  {
    path: 'app-myprofile', component: MyprofileComponent, canActivate: [AuthguardService],
    children: [
      {
        path: 'app-ticket-cancel/:id', component: TicketCancelComponent
      }
    ]
  },
  { path: 'app-journey-main', pathMatch: 'full', redirectTo: 'app-journey-main/app-journey-list' },
  {
    path: 'app-journey-main', component: JourneyMainComponent, canActivate: [AuthguardService, AuthorizationguardService],
    children: [
      { path: "app-journey-create", component: JourneyCreateComponent },
      { path: "app-journey-list", component: JourneyListComponent },
      { path: "app-journey-delete/:id", component: JourneyDeleteComponent }
    ]
  },
  { path: 'app-discount', pathMatch: 'full', redirectTo: 'app-discount/app-discount-create' },
  {
    path: 'app-discount', component: DiscountComponent, canActivate: [AuthguardService, AuthorizationguardService],
    children: [
      { path: "app-discount-create", component: DiscountCreateComponent },
      { path: "app-discount-list", component: DiscountListComponent },
      { path: "app-discount-delete/:id", component: DiscountDeleteComponent }
    ]
  },
  { path: 'error', component: GlobalErrorHandlerComponent },
  { path: 'app-journey-details/:source/:dest/:date', component: JourneyDetailsComponent, canActivate: [AuthguardService] },
  { path: 'app-ticket-book', component: TicketBookComponent, canActivate: [AuthguardService] },
  { path: 'app-bus', pathMatch: 'full', redirectTo: "app-bus/app-bus-list" },
  {
    path: 'app-bus', component: BusComponent, canActivate: [AuthorizationguardService],
    children: [
      { path: "app-create-bus", component: CreateBusComponent },
      { path: "app-bus-list", component: BusListComponent },
      { path: "edit/:id", component: BusEditComponent },
      { path: "app-bus-delete/:id", component: BusDeleteComponent }
    ]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [LoggedinguardService]
  },
  {
    path: 'logout', component: LogoutComponent, canActivate: [AuthguardService]
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
