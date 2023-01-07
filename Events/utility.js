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
        // issue here with comparing after game loading a save
     let ingredientArray = ingreds[0].sort((a, b) => a.id - b.id);

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