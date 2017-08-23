import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { FirebaseService } from '../shared/firebase.service';
import { Recipe } from '../recipes/recipe.model';
import { Response} from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private firebaseService: FirebaseService, 
              private recipeService: RecipeService) {}

  onSaveData() {
    console.log('onSaveData');
    this.firebaseService.saveRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
}
