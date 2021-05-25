import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JourneyMainService } from '../journey-main.service';

@Component({
  selector: 'app-journey-delete',
  templateUrl: './journey-delete.component.html',
  styleUrls: ['./journey-delete.component.css']
})
export class JourneyDeleteComponent implements OnInit {

  id: any;
  constructor(private router: Router, private journeyService: JourneyMainService, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => this.id = param.get('id'));
    this.journeyService.deleteJourney(this.id).subscribe((data: {}) => { this.router.navigate(['/app-journey-main/app-journey-list']) });
  }

}
