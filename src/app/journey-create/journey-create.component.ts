import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { JourneyMainService } from '../journey-main.service';

import { journeyObject } from '../journeyObject';
declare var $: any;
@Component({
  selector: 'app-journey-create',
  templateUrl: './journey-create.component.html',
  styleUrls: ['./journey-create.component.css']
})
export class JourneyCreateComponent implements OnInit {

  hours: any = []
  minutes: any = []
  defaultDate = new Date();
  journeyObject: journeyObject = {
    bus: {},
    source: '',
    dest: '',
    journeyDate: '',
    pickupDetails: {},
    dropDetails: {},
    availableSeats: 17
  };
  journey: any = {
    source: '',
    dest: '',
    busIndex: 0,
    date: (new Date()).toISOString().substring(0, 10),
  }
  pickupDetail: any = [
    {
      pickupPlace: '',
      hour: '',
      minute: ''
    },
    {
      pickupPlace: '',
      hour: '',
      minute: ''
    }
  ]
  dropDetail: any = [
    {
      dropPlace: '',
      hour: '',
      minute: ''
    },
    {
      dropPlace: '',
      hour: '',
      minute: ''
    }
  ]

  day: any;
  month: any;
  year: any;
  isLoading: boolean = false;
  busList: any;
  placeList = ['Delhi', 'Bangalore', 'Kolkata', 'Mumbai', 'Pune', 'Lucknow', 'Ahmedabad', 'Chennai', 'Jaipur', ' Bhopal'];
  constructor(private busService: BusService, private router: Router, private journeyService: JourneyMainService) { }

  ngOnInit(): void {
    for (let i = 0; i < 24; i++)
      this.hours[i] = (i < 10 ? '0' : '') + i;
    for (let i = 0; i < 60; i++)
      this.minutes[i] = (i < 10 ? '0' : '') + i;
    this.busService.getBuses().subscribe(data => { console.log(data); this.busList = data });
    this.day = this.defaultDate.getDate();
    this.month = this.defaultDate.getMonth() + 1;
    this.year = this.defaultDate.getFullYear();

    if (this.month < 10) this.month = "0" + this.month;
    if (this.day < 10) this.day = "0" + this.day;

  }
  async onSubmit() {
    this.isLoading = true;
    this.journeyObject.bus = this.busList[this.journey.bus]
    this.journeyObject.source = this.journey.source;
    this.journeyObject.dest = this.journey.dest;
    this.journeyObject.journeyDate = this.journey.date;
    this.journeyObject.pickupDetails[this.pickupDetail[0].pickupPlace] = `${this.pickupDetail[0].hour}:${this.pickupDetail[0].minute}:00`;
    this.journeyObject.pickupDetails[this.pickupDetail[1].pickupPlace] = `${this.pickupDetail[1].hour}:${this.pickupDetail[1].minute}:00`;
    this.journeyObject.dropDetails[this.dropDetail[0].dropPlace] = `${this.dropDetail[0].hour}:${this.dropDetail[0].minute}:00`;
    this.journeyObject.dropDetails[this.dropDetail[1].dropPlace] = `${this.dropDetail[1].hour}:${this.dropDetail[1].minute}:00`;
    await this.journeyService.addJourney(this.journeyObject);
    this.router.navigate(['/app-bus/app-bus-list']);
    this.isLoading = false;

  };

}

