import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-discount-delete',
  templateUrl: './discount-delete.component.html',
  styleUrls: ['./discount-delete.component.css']
})
export class DiscountDeleteComponent implements OnInit {

  id: any;
  constructor(private discountService: DiscountService, private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(data => this.id = data.get('id'))
    this.discountService.deleteDiscount(this.id).subscribe(data => { this.router.navigate(['app-discount/app-discount-list']) })
  }

}
