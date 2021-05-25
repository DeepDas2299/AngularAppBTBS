import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.css']
})
export class DiscountListComponent implements OnInit {

  discountList: any = [];
  discounBusNameList: any = [];
  bus: any;
  constructor(private discountService: DiscountService, private busService: BusService) { }

  async ngOnInit(): Promise<void> {
    this.discountList = await this.discountService.getDiscounts();
    for (let discount of this.discountList) {
      this.bus = await this.busService.getBus(discount.busId);
      this.discounBusNameList.push(this.bus.busName);
    }
  }

}
