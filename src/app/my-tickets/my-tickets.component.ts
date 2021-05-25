import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BookingService } from '../booking.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {



  user: any;
  tickets: any;
  journeyDate: any[] = [];
  source: any[] = [];
  dest: any[] = [];
  timeStamp: any[] = [];
  pickupTime: any[] = [];
  dropTime: any[] = [];
  passengers: any[] = [];
  constructor(private bookingService: BookingService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {

    this.user = await this.userService.getUserByEmail(sessionStorage.getItem('email'));
    this.tickets = await this.bookingService.getTicketByUser(this.user.uid);
    for (let ticket of this.tickets) {
      this.journeyDate.push(moment(ticket.journey.journeyDate).format('DD MMM YYYY'))
      this.source.push(ticket.journey.source)
      this.dest.push(ticket.journey.dest)
      this.timeStamp.push(moment(ticket.bookingTime, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD, HH:mm:ss'))
      this.pickupTime.push(moment(ticket.pickupTime, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm'))
      this.dropTime.push(moment(ticket.dropTime, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm'))
      this.passengers.push(ticket.passengers)

    }

  }
}