import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-ticket-cancel',
  templateUrl: './ticket-cancel.component.html',
  styleUrls: ['./ticket-cancel.component.css']
})
export class TicketCancelComponent implements OnInit {
  id: any
  constructor(private router: Router, private aroute: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(data => this.id = data.get('id'));
    this.bookingService.deleteTicket(this.id).subscribe(data => this.router.navigate(['app-myprofile']))
  }

}
