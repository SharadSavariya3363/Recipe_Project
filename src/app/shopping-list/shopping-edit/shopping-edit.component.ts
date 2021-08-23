import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef: any;
  @ViewChild('inputAmount') inputAmountRef: any;

  name:any;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.name = {name:this.route.snapshot.params['name']};
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment)
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name']
      }
    )
  }
  onAddItem(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngrediant(newIngredient);
  }

}
