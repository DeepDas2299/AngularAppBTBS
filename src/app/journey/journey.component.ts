import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  sourceSample = ['Delhi', 'Bangalore', 'Kolkata', 'Mumbai', 'Pune', 'Lucknow', 'Ahmedabad', 'Chennai', 'Jaipur', ' Bhopal'];;
  destSample = this.sourceSample;

  searchDetails = {
    source: 'Delhi',
    dest: 'Bangalore',
    date: (new Date()).toISOString().substring(0, 10),
  }
  constructor() { }


  ngOnInit(): void {
  }
  onSubmit() {
    //console.log(this.searchDetails)

  }


}
