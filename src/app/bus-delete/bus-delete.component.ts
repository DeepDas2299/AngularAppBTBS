import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-delete',
  templateUrl: './bus-delete.component.html',
  styleUrls: ['./bus-delete.component.css']
})
export class BusDeleteComponent implements OnInit {

  id: any;
  constructor(private aroute: ActivatedRoute, private busService: BusService, private router: Router) { }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => this.id = param.get('id'));
    this.busService.deleteBus(this.id).subscribe((data: {}) => { this.router.navigate(['/app-bus/app-bus-list']) });
  }

}
