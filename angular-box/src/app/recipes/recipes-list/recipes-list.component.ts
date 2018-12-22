import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  // onRecipeSelected(recipe:Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}
