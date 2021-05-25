import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {

  public bookingReq = {};
  constructor() { }
  setBookingRequest(bookingReq: any) {
    this.bookingReq = bookingReq;
  }
  getBookingRequest() {
    return this.bookingReq;
  }
}
