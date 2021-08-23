import { Injectable , EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingrediantChanged = new  EventEmitter<Ingredient[]>();

  private ingrediants: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Oranges', 15)
  ];

  getIngrediants(){
    return this.ingrediants.slice();
  }

  addIngrediant(ingrediant: Ingredient){
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.emit(this.ingrediants.slice());
  }
  addIngediantFromRecipe(ingredients:Ingredient[]){
    this.ingrediants.push(...ingredients);
    this.ingrediantChanged.emit(this.ingrediants.slice());
  }
  constructor() { }
}
