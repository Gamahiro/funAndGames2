import { itemList } from "../../player/itemList.js";
import { IngredientObject } from "../../player/foodObject.js";

function createIngredient(id, name, price, type, playerAmount, shopAmount, imageSrc) {
    let ingredient = new IngredientObject(id, name, price, type, playerAmount, shopAmount, imageSrc);
    itemList.push(ingredient);
}

export {createIngredient}