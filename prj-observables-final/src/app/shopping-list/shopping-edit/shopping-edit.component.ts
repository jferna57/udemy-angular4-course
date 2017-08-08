import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(shoppingForm: NgForm) {
    const ingName = shoppingForm.value.name;
    const ingAmount = shoppingForm.value.amount;
    
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
