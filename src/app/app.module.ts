import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './Recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './Recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './Recipes/Recipes-List/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './Shopping-List/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
