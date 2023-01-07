import { buyIngredientsPage } from "../../UI/ingredientShop/buyIngredientsPage.js";
import { landingPage } from "../../UI/landingPage/landingPage.js";
import { sellMealsPage } from "../../UI/sellMeals/sellMealsPage.js";
import { createCustomerOrder } from "../cooking/customerOrder.js";
import { buyIngredientEvent } from "../ingredientShop/buyIngredient.js";
import { saveLoadGame } from "../playerData/saveLoadEvent.js";

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

function profileTab() {
    document.querySelector('#profileTab').addEventListener('click', () => {
        landingPage();
    })
} 





// initializes all the tab events
function tabEvents() {
    sellMealsTab();
    ingredientShopTab();
    profileTab();
    saveLoadGame();
}

export {tabEvents}