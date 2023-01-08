import { itemList } from "../../player/itemList.js";
import { createIngredient } from "./createIngredient.js";
import { createMeal } from "./createMeal.js";
import { getItemData } from "../utility.js";

const itemData = await getItemData();

const ingredientList = itemData.ingredients;
const recipeList = itemData.recipes;

function starterItems() {

    for (let property in ingredientList) {
        let ingredient = ingredientList[property];
        createIngredient(
            ingredient.ID,
            ingredient.name,
            ingredient.price,
            ingredient.type,
            0,
            10,
            ingredient.imageSrc
        )
    }

    for (let property in recipeList) {
        let recipe = recipeList[property];

        let recipeIngredients = [];

        recipe.ingredients.forEach(element => {
            let ingr = itemList.find(({ id }) => id === element);
            recipeIngredients.push(ingr)
        });
        createMeal(
            recipe.name,
            recipe.price,
            recipe.type,
            recipeIngredients
        )
    }
}


export {starterItems}