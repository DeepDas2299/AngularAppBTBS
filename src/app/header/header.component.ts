import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAdmin = sessionStorage.getItem('role') == 'admin';
  }

}
