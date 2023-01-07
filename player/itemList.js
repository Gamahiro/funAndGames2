import { createIngredient } from "../Events/init/createIngredient.js";
import { createMeal } from "../Events/init/createMeal.js";


let itemList = [];

let recipeList = [];

let selectedList = [];

let currentOrder = [];


function setItemList(...newItems) {
    itemList = [];
    for (let property in newItems[0]) {
        let ingredient = newItems[0][property];
        createIngredient(
            ingredient.id,
            ingredient.ingredientName,
            ingredient.price,
            ingredient.type,
            ingredient.playerAmount,
            ingredient.shopAmount
        )
    }
}

function setRecipeList(...newRecipes) {
    recipeList = [];

    for (let property in newRecipes[0]) {

        let recipe = newRecipes[0][property];




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

function updateCurrentOrder(newOrder) {
    currentOrder = newOrder;
}

function updateSelectedList(newList) {
    selectedList = newList;
}

export {
    itemList, recipeList,
    selectedList, updateSelectedList,
    currentOrder, updateCurrentOrder,
    setItemList, setRecipeList
}