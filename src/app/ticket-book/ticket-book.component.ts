import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BookingRequestService } from '../booking-request.service';
import { BookingService } from '../booking.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ticket-book',
  templateUrl: './ticket-book.component.html',
  styleUrls: ['./ticket-book.component.css']
})
export class TicketBookComponent implements OnInit {
  isLoading: boolean = false;
  user: any;
  passengerList: any[] = [];
  bookingRequest: any = {};
  arePassengerDetailsValid: boolean = false;
  startingTime: any;
  endingTime: any;
  date: any;
  pickupDetail: any;
  dropDetail: any;
  ticket: any = {

  }
  constructor(private bookingReqService: BookingRequestService, private bookingService: BookingService, private router: Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {

    if (sessionStorage.getItem('ticket') == null) {
      this.router.navigate(['app-home'])

    }
    sessionStorage.removeItem('ticket')
    this.user = await this.userService.getUserByEmail(sessionStorage.getItem('email'));
    this.bookingRequest = this.bookingReqService.getBookingRequest();
    for (let i = 0; i < this.bookingRequest.seatsToBook.length; i++) {
      this.passengerList[i] = {};
    }
    this.startingTime = String(Object.values(this.bookingRequest.journey.pickupDetails)[0]).slice(0, -3);
    this.endingTime = String(Object.values(this.bookingRequest.journey.dropDetails)[0]).slice(0, -3);
    this.date = this.bookingRequest.journey.journeyDate;
    this.pickupDetail = this.bookingRequest.pickupDetail;
    this.dropDetail = this.bookingRequest.dropDetail;

  }
  checkPassengerDetails() {
    for (let passenger of this.passengerList) {
      if (passenger.name && passenger.age && passenger.gender)
        this.arePassengerDetailsValid = true;
      else {
        this.arePassengerDetailsValid = false;
        return;
      }
    }

  }
  async bookTicket() {
    this.isLoading = true;
    if (this.passengerList.length == 0) return;
    if (!this.arePassengerDetailsValid) return;

    this.ticket.busName = this.bookingRequest.journey.bus.busName;
    this.ticket.bookingTime = moment().format("YYYY-MM-DDTHH:mm.ss");
    this.ticket.price = this.bookingRequest.price;
    this.ticket.seatsBooked = this.bookingRequest.seatsToBook.length;
    this.ticket.pickupPoint = this.bookingRequest.pickupDetail.key
    this.ticket.dropPoint = this.bookingRequest.dropDetail.key
    this.ticket.pickupTime = this.bookingRequest.journey.journeyDate + "T" + this.bookingRequest.pickupDetail.value
    this.ticket.dropTime = this.bookingRequest.journey.journeyDate + "T" + this.bookingRequest.dropDetail.value
    this.ticket.passengers = this.passengerList
    this.ticket.bookedSeats = this.bookingRequest.seatsToBook
    this.ticket.user = {
      "uid": this.user.uid
    }
    this.ticket.journey =
    {
      "journeyID": this.bookingRequest.journey.journeyID
    }

    await this.bookingService.addTicket(this.ticket);
    this.router.navigate(["/app-home"]);
    this.isLoading = false;

  }
}
