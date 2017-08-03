import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log('username: ' + form.value['username']);
    console.log('email: ' + form.value['email']);
    console.log('secret: ' + form.value['secret']);
    console.log(form);

  }
}
