import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is test for the test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
        new Recipe('Test Recipe', 'This is some test for the test', 'https://www.jimmypsbutchershop.com/image/cache/catalog/Double%20rib%20chop_1024x683-900x800.jpg')
      ];
      
    getRecipe() {
        return this.recipes.slice();

    }
}