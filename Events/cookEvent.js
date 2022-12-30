import { updateResourceUI } from "../controller/updateResource.js";
import { cookMeal } from "../Events/cookMeal.js";

function cookEvent(btn, meal) {
    btn.addEventListener('click', () => {
        cookMeal(meal);
        updateResourceUI();
    })
} 

export {cookEvent}