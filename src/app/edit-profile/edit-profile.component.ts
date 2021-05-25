import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: any
  isLoading: boolean = false;
  @Output() updateEvent = new EventEmitter<string>();
  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUserByEmail(sessionStorage.getItem('email'));
  }
  async onUpdate() {
    this.isLoading = true;
    this.updateEvent.emit('close');
    await this.userService.updateUser(this.user)
    this.isLoading = false;
  }
}
