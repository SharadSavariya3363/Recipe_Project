import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AuthGuard } from "./auth.guard";
// import { DeactivateGuard } from "./deactivate.guard";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
    {path: '' , component: RecipeComponent},
    {path: 'recipe', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent}, 
      {path: 'new' , component: RecipeEditComponent},
      {path: ':id' , component: RecipeDetailComponent},
      {path: ':id/edit' , component: RecipeEditComponent}
    ]},
    {path: 'shopping-list' , component: ShoppingListComponent},
    {path: 'shopping-list/:name' ,  component: ShoppingListComponent},
    {path: 'not-found', component:PageNotFoundComponent},
    {path: '**', redirectTo: "/not-found"}
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}