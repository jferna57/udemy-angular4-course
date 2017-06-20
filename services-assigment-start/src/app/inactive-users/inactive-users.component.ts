import { Component } from '@angular/core';

import { CounterService } from './../counter.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent{

  constructor (private userService: UserService,
    private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.userService.activeUser(id);  
  }
}
