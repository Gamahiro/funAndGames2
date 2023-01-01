import { itemList } from "../player/itemList.js";
import { IngredientObject } from "../player/foodObject.js";

function createIngredient(id, name, price, type, playerAmount, shopAmount) {
    let ingredient = new IngredientObject(id, name, price, type, playerAmount, shopAmount);
    itemList.push(ingredient);
}

export {createIngredient}