import { recipeList } from "../player/itemList.js";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


async function getItemData() {
    const response = await fetch('./player/itemList.json');
    const itemData = await response.json();
    return itemData;
}

function getRecipeFromIngredients(...ingreds) {

    let ingredientArray = [];
    ingreds.forEach(element => {
        ingredientArray.push(element)
    });

    /* let recipe = recipeList.find(({ ingredients }) => ingredients === ingredientArray[0]);
     */
    let recipe = recipeList.find(obj => {
        
        for (let index = 0; index < obj.ingredients.length; index++) {

            if (obj.ingredients.length !== ingredientArray.length) return;

            const searchElement = obj.ingredients[index];
            const ingredientArrayElement = ingredientArray[index];

            if (searchElement.id !== ingredientArrayElement.id) return;

        }
        return obj;

    });
    return recipe;
}

export {randomNumber, getItemData, getRecipeFromIngredients}