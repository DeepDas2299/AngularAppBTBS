import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
declare var $: any;
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  refreshed: boolean = false;
  user: any;
  showBackdrop: boolean = true;
  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit() {

    this.user = await this.userService.getUserByEmail(sessionStorage.getItem('email'))
    if (!localStorage.getItem('alreadyRefreshed')) {
      localStorage.setItem('alreadyRefreshed', 'true')
      window.location.reload()
    }

  }
  closeEditWindow() {

    $('.offcanvas')[0].classList.remove('show');
    window.location.reload()

  }
}




