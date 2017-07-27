import { Component, OnDestroy, OnInit } from '@angular/core';

import 'rxjs/Rx';
import { Observable, Subscribable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  myIntervalObserver: Subscription;
  myCustomObserver: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.myIntervalObserver = myNumbers.subscribe(
      (number: number) => {
        console.log (number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.next('third package');
      }, 6000);
    });

    this.myCustomObserver = myObservable.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('completed'); } 
    );
  }

  ngOnDestroy() {
    this.myIntervalObserver.unsubscribe();
    this.myCustomObserver.unsubscribe();

  }

}
