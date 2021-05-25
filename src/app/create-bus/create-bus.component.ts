import { Component, OnInit } from '@angular/core';
// import { BusService } from '../bus.service';
// import { Bus } from '../bus';

import { Router } from '@angular/router';
import { Bus } from '../Bus';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {

  isLoading: boolean = false;
  bus: Bus = {
    busName: '',
    busType: '',
    seats: []
  }
  constructor(private router: Router, private busService: BusService) { }

  ngOnInit() {
    for (let i = 0; i < 17; i++)
      this.bus.seats[i] = new Object();
  }
  async onSubmit() {
    this.isLoading = true;
    await this.busService.addBus(this.bus);
    this.router.navigate(['/app-bus/app-bus-list'])
    this.isLoading = false;
  }
}
