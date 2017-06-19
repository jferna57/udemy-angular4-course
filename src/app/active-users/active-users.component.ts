import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users = [];

  constructor (private userService: UserService) {}

  ngOnInit(){
    this.users = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.inactiveUser(id);      
  }
}
