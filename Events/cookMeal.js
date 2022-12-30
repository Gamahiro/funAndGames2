import { itemList } from "../player/itemList.js";
import { player } from "../player/playerObject.js";

function cookMeal(meal) {

    for (let i = 0; i < meal.ingredients.length; i++) {
        const element = meal.ingredients[i];
        if(element.playerAmount < 1) return console.log(`you don't have enough ${meal.ingredients[i].ingredientName}`);
    }

    for (let i = 0; i < meal.ingredients.length; i++) {
        const element = meal.ingredients[i];
        element.setPlayerAmount(-1);
        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Amount`).textContent = `${element.playerAmount} x `;
    }

    player.setMoney = meal.price;
    console.log(`${meal.mealName} cooked!`)
}

export {cookMeal}