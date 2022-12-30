import { itemList } from "../player/itemList.js";
import { createIngredient } from "./createIngredient.js";
import { createMeal } from "./createMeal.js";


function starterItems() {
    createIngredient('Tomato', 2, 'Vegetable', 0, 10);
    createIngredient('Ground Beef', 5, 'Meat', 0, 10);
    createIngredient('Soft Tortilla', 2, 'Bread', 0, 10);
    createMeal('Taco', 12, 'Mexican', itemList[0], itemList[1], itemList[2]);
}

//add more items initialization for progression, levels etc.

export {starterItems}