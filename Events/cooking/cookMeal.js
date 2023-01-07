import { player } from "../../player/playerObject.js";
import { playerError } from "../../Events/errorEvent.js";
import { currentOrder, selectedList, updateCurrentOrder, updateSelectedList } from "../../player/itemList.js";
import { createCustomerOrder } from "./customerOrder.js";
import { createCustomerOrderUI } from "../../UI/sellMeals/customerOrderUI.js";


function cookMeal(meal) {
    updateCurrentOrder(meal);
    
    for (let i = 0; i < meal.ingredients.length; i++) {
        const element = meal.ingredients[i];
        if(element.playerAmount < 1) return playerError(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Amount`), `you don't have enough ${meal.ingredients[i].ingredientName}`);
    }

    for (let i = 0; i < meal.ingredients.length; i++) {
        const element = meal.ingredients[i];
        element.setPlayerAmount(-1);
        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Amount`).textContent = `${element.playerAmount} x `;
    }
    if(meal === currentOrder) {
        player.saveData.setMoney = meal.price;
        console.log(`${meal.mealName} cooked!`)
    }else {
        player.saveData.setMoney = meal.price  - 5;
        console.log(`Order was ${currentOrder.mealName} and not ${meal.mealName}`)
    }
    updateSelectedList([]);
    updateCurrentOrder('');

}

export {cookMeal}