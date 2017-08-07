import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') myForm: NgForm;
  submitted = false;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  data = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(){
    this.submitted =true;
    console.log(this.myForm.form);

    this.data.email = this.myForm.value.email;
    this.data.subscription = this.myForm.value.subscriptions;
    this.data.password = this.myForm.value.password;

    this.myForm.reset();

  }
}
