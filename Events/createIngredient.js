import { itemList } from "../player/itemList.js";
import { IngredientObject } from "../player/foodObject.js";

function createIngredient(name, price, type, playerAmount, shopAmount) {
    let ingredient = new IngredientObject(name, price, type, playerAmount, shopAmount);
    itemList.push(ingredient);
}

export {createIngredient}