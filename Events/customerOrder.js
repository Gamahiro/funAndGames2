import { randomNumber } from "../Events/utility.js";
import { recipeList } from "../player/itemList.js";


function createCustomerOrder() {
let customerOrder = recipeList[randomNumber(0, recipeList.length - 1)];
    return customerOrder;
}

export {createCustomerOrder}