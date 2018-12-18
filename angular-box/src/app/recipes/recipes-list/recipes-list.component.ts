import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is test for the test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Test Recipe', 'This is some test for the test', 'https://www.jimmypsbutchershop.com/image/cache/catalog/Double%20rib%20chop_1024x683-900x800.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
