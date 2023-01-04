import { updateResourceUI } from "../controller/updateResource.js";
import { sellMealsPage } from "../dynamicDOM/sellMealsPage.js";
import { cookMeal } from "../Events/cookMeal.js";
import { selectedList } from "../player/itemList.js";
import { playerError } from "./errorEvent.js";
import { getRecipeFromIngredients } from "./utility.js";


function cookEvent() {
    document.querySelector('#cookBtn').addEventListener('click', () => {
        try {
            let meal = getRecipeFromIngredients(selectedList);
            cookMeal(meal);
            updateResourceUI();
            sellMealsPage();
        } catch (error) {
            playerError(document.querySelector('#cookBtn').parentElement, 'That`s not a recipe');
        }
    })
}

export { cookEvent }