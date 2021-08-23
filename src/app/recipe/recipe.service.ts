import { Injectable , EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'This is recipe of Burger', 
      'https://www.thespruceeats.com/thmb/O4xB3FoR7B6ovTpcENFLtQyIuAU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg', 
      [
         new Ingredient('Meat',1),
         new Ingredient('Frenc Fries',20)
       ]),
    new Recipe(
      'Coke', 
      'This is recipe of Coke', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fibAxxQwaDwyy-ZlU4keIoLv4GuW0VOy-tOseFFP5OfDmp-xpE8eAJnEwlw9tXlxjIQ&usqp=CAU',
      [
        new Ingredient('Meat',1),
        new Ingredient('Frenc Fries',50)
      ]),
    new Recipe(
      'Payment', 
      'This is recipe of Payment', 
      'https://qualityinspection.org/wp-content/uploads/2012/01/HowtoPayChineseSuppliersbyBankTransferTT.jpg', 
      [
        new Ingredient('Meat',1),
        new Ingredient('Only Cash',100)
      ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeItem(id: number){
    return this.recipes[id];
  }

  addIngrediantsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngediantFromRecipe(ingredients)
  }
  constructor(private shoppingListService: ShoppingListService) { }
}
