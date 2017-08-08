import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  invalidProjectNames = ['Test', 'test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'projectStatus': new FormControl(null, Validators.required)
    });
  }
  
  onSubmit() {
    console.log(this.projectForm);
    console.log(this.projectForm.get('projectName').value);
    console.log(this.projectForm.get('email').value);
    console.log(this.projectForm.get('projectStatus').value);
    this.projectForm.reset();
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean } {
    if (this.invalidProjectNames.indexOf(control.value) !== -1 ) {
      return {'forbiddenProjectName': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
    return promise;
  }


}
