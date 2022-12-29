import { player } from "../player/playerObject.js";
import { ingredientObject } from "../player/foodObject.js";

function cookMeal(meal) {
    const playerInventory = player.getInventory;

    for (let i = 0; i < meal.ingredients.length; i++) {
        const element = meal.ingredients[i];
        console.log(playerInventory)
        let index = playerInventory.indexOf(element);
        if(index < 0) console.log(element)
            console.log(index)
             
    }

}

export {cookMeal}