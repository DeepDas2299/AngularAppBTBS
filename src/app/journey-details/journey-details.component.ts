import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BookingRequestService } from '../booking-request.service';
import { DiscountService } from '../discount.service';
import { JourneyMainService } from '../journey-main.service';
declare let $: any;
@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent implements OnInit {
  journeyList: any;
  source: any;
  dest: any;
  date: any;

  pickupDetailsList: any = [];
  dropDetailsList: any = [];
  seatList: any = [];
  seatsToBook: any = [];
  toggleButton: boolean[] = [];
  price = 0;
  discountedPrice: any = [];
  selectedPickup: any = {};
  selectedDrop: any = {};

  reservationReq: any = {
    journey: {},
    pickupDetail: {},
    dropDetail: {},
    seatsToBook: [],
    price: 0
  }
  pickupTime: any = [];
  dropTime: any = [];
  dateList: any = []
  constructor(private bookingReqService: BookingRequestService, private discountService: DiscountService, private router: Router, private journeyService: JourneyMainService, private aroute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.aroute.paramMap.subscribe(data => {
      this.source = data.get('source');
      this.dest = data.get('dest');
      this.date = data.get('date');
    })
    //console.log(moment(moment().format('yyyy-MM-DD')))
    if (moment(this.date) < moment(moment().format('yyyy-MM-DD'))) this.router.navigate(['app-home'])
    this.journeyList = await this.journeyService.searchJourney({ source: this.source, dest: this.dest, date: this.date });
    let i = 0;
    this.toggleButton.fill(false);

    for (let journey of this.journeyList) {
      this.pickupDetailsList.push(journey.pickupDetails);
      this.pickupTime.push(String(Object.values(this.pickupDetailsList[i])[0]).slice(0, -3))

      this.dropDetailsList.push(journey.dropDetails);
      this.dropTime.push(String(Object.values(this.dropDetailsList[i])[0]).slice(0, -3))
      this.seatList.push(journey.bus.seats);
      this.dateList.push(journey.journeyDate)
      let discountList = await this.discountService.getDiscountByBusId(journey.bus.busId)
      let discountPrice = 0;
      discountList.forEach(discount => {
        let journeyDate = moment(moment(journey.journeyDate).format('YYYY-MM-DD'));
        let startDate = moment(moment(discount.discountStartDate).format('YYYY-MM-DD'));
        let endDate = moment(moment(discount.discountEndDate).format('YYYY-MM-DD'));
        if (journeyDate >= startDate && journeyDate <= endDate)
          discountPrice += discount.price
      })
      this.discountedPrice.push(1500 - discountPrice)
      i++;

    }

    this.seatList.sort(function (a: any, b: any) {
      return a.seatNo - b.seatNo
    })

  }
  toggleSeatDisp(button: any, i: any) {
    this.price = 0;
    this.seatsToBook = [];
    this.selectedPickup = {}
    this.selectedDrop = {};
    $('.seat').removeClass('seat-selected')
    for (let index in this.toggleButton) {
      if (index == i) continue;
      this.toggleButton[index] = false;
    }
    this.toggleButton[i] = !this.toggleButton[i];

  }
  toggleSelectedSeat(event: any, i: any) {
    let target = event.target;
    if (target.classList.contains('seat')) {
      if (target.classList.contains('seat-booked')) return;
      if (target.classList.contains('seat-selected')) {
        this.seatsToBook.splice(this.seatsToBook.indexOf(Number(target.innerText.substring(1))));
        target.classList.remove('seat-selected')
        this.price -= this.discountedPrice[i];
      }
      else {
        if (this.seatsToBook.length > 4) return
        this.seatsToBook.push(Number(target.innerText.substring(1)));
        target.classList.add('seat-selected')
        this.price += this.discountedPrice[i];
      }

    }
  }
  isPlaceDetailsEmpty() {
    return (Object.keys(this.selectedPickup).length == 0 || Object.keys(this.selectedDrop).length == 0);
  }
  isSeatBooked(seat: any, journey: any) {
    return (journey.bookedSeats.indexOf(seat.seatNo) > -1)
  }
  onSubmit(journey: any) {
    if (this.seatsToBook.length == 0 || this.isPlaceDetailsEmpty()) return;
    this.reservationReq.journey = journey;
    this.reservationReq.seatsToBook = this.seatsToBook;
    this.reservationReq.pickupDetail = this.selectedPickup;
    this.reservationReq.dropDetail = this.selectedDrop;
    this.reservationReq.price = this.price;
    this.bookingReqService.setBookingRequest(this.reservationReq);

    sessionStorage.setItem('ticket', 'true');
    this.router.navigate(["/app-ticket-book"]);
  }
}
