import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') myForm: NgForm;
  defaultQuestion = 'teacher'

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('username: ' + form.value['username']);
  //   console.log('email: ' + form.value['email']);
  //   console.log('secret: ' + form.value['secret']);
  //   console.log(form);

  // }

  onSubmit() {
    console.log('Is invalid: ' + this.myForm.invalid);
    console.log('username: ' + this.myForm.value['username']);
    console.log('email: ' + this.myForm.value['email']);
    console.log('secret: ' + this.myForm.value['secret']);
  }
}
