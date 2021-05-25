import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../Bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {

  isLoading: boolean = false;
  bus: any = {
    busId: 0,
    busName: '',
    busType: "",
    seats: []
  }
  constructor(public aroute: ActivatedRoute, private router: Router, private busService: BusService) { }

  async ngOnInit(): Promise<void> {
    this.aroute.paramMap.subscribe(data => this.bus.busId = data.get('id'))
    this.bus = await this.busService.getBus(this.bus.busId);
  }
  async onSubmit() {
    this.isLoading = true;
    await this.busService.updateBus(this.bus);
    this.router.navigate(['/app-bus/app-bus-list']);
    this.isLoading = false;
  }
}
