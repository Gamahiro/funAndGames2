import { buyIngredientsPage } from "../dynamicDOM/buyIngredientsPage.js";
import { sellMealsPage } from "../dynamicDOM/sellMealsPage.js";
import { buyIngredientEvent } from "./buyIngredient.js";

function sellMealsTab() {
    document.querySelector('#sellMealsTab').addEventListener('click', () => {
        sellMealsPage();
    });
}


function ingredientShopTab() {
    document.querySelector('#ingredientShopTab').addEventListener('click', () => {
        buyIngredientsPage();
        buyIngredientEvent();
    });

}



// initializes all the tab events
function tabEvents() {
    sellMealsTab();
    ingredientShopTab();
}

export {tabEvents}