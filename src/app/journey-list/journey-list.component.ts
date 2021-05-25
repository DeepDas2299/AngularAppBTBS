import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourneyMainService } from '../journey-main.service';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {
  placeList = ['Delhi', 'Bangalore', 'Kolkata', 'Mumbai', 'Pune', 'Lucknow', 'Ahmedabad', 'Chennai', 'Jaipur', ' Bhopal'];
  matchedJourneys: any;
  searchDetails = {
    source: '',
    dest: '',
    date: (new Date()).toISOString().substring(0, 10),
  }
  constructor(private journeyService: JourneyMainService, public router: Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.searchDetails)
    this.matchedJourneys = await this.journeyService.searchJourney(this.searchDetails);
    this.router.navigate([this.router.url])
  }
}
