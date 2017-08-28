import { Component } from '@angular/core';
import { Response} from '@angular/http';

import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private firebaseService: FirebaseService) {}

  onSaveData() {
    console.log('onSaveData');
    this.firebaseService.saveRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    console.log('onFetchData');
    this.firebaseService.getRecipes();
  }
}
