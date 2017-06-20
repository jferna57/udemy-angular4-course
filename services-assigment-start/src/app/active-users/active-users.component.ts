import { Component } from '@angular/core';

import { CounterService } from './../counter.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private userService: UserService,
    private counterService: CounterService) { }

  onSetToInactive(id: number) {
    this.userService.inactiveUser(id);
  }
}
