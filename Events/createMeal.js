import { recipeList } from "../player/itemList.js";
import { IngredientObject, MealObject } from "../player/foodObject.js";

function createMeal(name, price, type, ...ingredients) {
    let meal = new MealObject(name, price, type, ingredients);
    recipeList.push(meal);
}

export {createMeal}