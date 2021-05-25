import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: any = {
    fname: '',
    mname: '',
    lname: '',
    address: {
      streetName: '',
      city: '',
      state: '',
      zipcode: ''
    },
    phone: '',
    emailId: '',
    password: '',
    role: {

    },
    gender: '',
  }
  isLoading: boolean = false;
  roleIndex: any;
  roleList: any = [];
  constructor(private userService: UserService, private roleService: RoleService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.roleList = await this.roleService.getRoles();
  }
  async onRegister() {

    this.isLoading = true;
    this.register.role = this.roleList[this.roleIndex]
    if (await this.userService.getUserByEmail(this.register.emailId)) {
      window.alert("user exits")
    }
    else {
      await this.userService.addUser(this.register);
      this.router.navigate(['login']);
    }
    this.isLoading = false;
  }
}
