import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneyComponent } from './journey/journey.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { TicketBookComponent } from './ticket-book/ticket-book.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BusComponent } from './bus/bus.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import { JourneyCreateComponent } from './journey-create/journey-create.component';
import { JourneyMainComponent } from './journey-main/journey-main.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusDeleteComponent } from './bus-delete/bus-delete.component';
import { JourneyDeleteComponent } from './journey-delete/journey-delete.component';
import * as $ from "jquery";
import { TicketCancelComponent } from './ticket-cancel/ticket-cancel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { DiscountComponent } from './discount/discount.component';
import { DiscountCreateComponent } from './discount-create/discount-create.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountDeleteComponent } from './discount-delete/discount-delete.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    JourneyComponent,
    JourneyDetailsComponent,
    TicketBookComponent,
    NavbarComponent,
    HomeComponent,
    MyprofileComponent,
    BusComponent,
    CreateBusComponent,
    BusListComponent,
    BusEditComponent,
    JourneyCreateComponent,
    JourneyMainComponent,
    JourneyListComponent,
    BusDeleteComponent,
    JourneyDeleteComponent,
    TicketCancelComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    MyTicketsComponent,
    ProfileInfoComponent,
    EditProfileComponent,
    PageNotFoundComponent,
    GlobalErrorHandlerComponent,
    DiscountComponent,
    DiscountCreateComponent,
    DiscountListComponent,
    DiscountDeleteComponent,
    HomeMainComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
