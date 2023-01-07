import { randomNumber } from "../../Events/utility.js";
import { recipeList, updateCurrentOrder } from "../../player/itemList.js";
import { createCustomerOrderUI } from "../../UI/sellMeals/customerOrderUI.js";


function createCustomerOrder() {
let customerOrder = recipeList[randomNumber(0, recipeList.length - 1)];
    updateCurrentOrder(customerOrder);
}

export {createCustomerOrder}