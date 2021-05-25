import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { BusService } from '../bus.service';



@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  busList: any = [];


  // Bus: Observable<Bus[]>;

  constructor(private busService: BusService, private router: Router) { }

  ngOnInit() {
    this.busService.getBuses().subscribe(data => this.busList = data);
  }

  // reloadData() {
  //   this.Bus = this.busService.getBusList();
  // }

  // deleteBus(id: number) {
  //   this.busService.deleteBus(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // busDetails(id: number) {
  //   this.router.navigate(['details', id]);
  // }





}