import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Headers } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class FirebaseService {
    
    constructor(private http: Http,
                private recipeServices: RecipeService) {}

    saveRecipes() {
        return this.http.put(
            'https://my-ng-recipe-book.firebaseio.com/recipes.json',
            this.recipeServices.getRecipes());
    }
}
