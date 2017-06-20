import { Component } from '@angular/core';

import { Numero } from './numero.model';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent {

  total: number;
  counter: Numero = new Numero(0);

  constructor(private counterService: CounterService) {
    this.total = counterService.counter.total;
    this.counter = this.counterService.counter;
  }

  incrementTotal() {
    this.counterService.incrementTotal();
  }

}
