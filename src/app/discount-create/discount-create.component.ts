import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BusService } from '../bus.service';
import { DiscountService } from '../discount.service';

declare var $: any;

@Component({
  selector: 'app-discount-create',
  templateUrl: './discount-create.component.html',
  styleUrls: ['./discount-create.component.css']
})
export class DiscountCreateComponent implements OnInit {
  isLoading: boolean = false;
  busList: any;

  reqDiscount = {
    bus: '',
    sdate: (new Date()).toISOString().substring(0, 10),
    edate: (new Date()).toISOString().substring(0, 10),
    price: 300
  }
  discount = {
    busId: '',
    price: 300,
    discountStartDate: '',
    discountEndDate: ''

  }
  constructor(private busService: BusService, private router: Router, private discountService: DiscountService) { }

  ngOnInit(): void {
    this.busService.getBuses().subscribe(data => { this.busList = data });

  }
  async onSubmit() {
    this.isLoading = true;
    this.discount.busId = this.busList[this.reqDiscount.bus].busId;
    this.discount.price = this.reqDiscount.price;
    this.discount.discountStartDate = this.reqDiscount.sdate + 'T' + '00:00:00';
    this.discount.discountEndDate = this.reqDiscount.edate + 'T' + '00:00:00';
    console.log(this.discount)
    await this.discountService.addDiscount(this.discount);
    this.router.navigate(['/app-discount/app-discount-list'])
    this.isLoading = false;
  }
}
