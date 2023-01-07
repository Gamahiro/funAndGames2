import { cookEvent } from "../../Events/cooking/cookEvent.js";
import { initCookEvent, initInventoryEvent } from "../../Events/inventoryEvent.js";
import { createCookUI } from "./createCookUI.js";
import { createGameWindow } from "../gameWindowUI.js";
import { createInventory } from "../inventoryUI.js";
import { createRecipeList } from "./recipesUI.js";
import { createCustomerOrderUI } from "./customerOrderUI.js";
import { createCustomerOrder } from "../../Events/cooking/customerOrder.js";

function sellMealsPage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
    createInventory();
    initInventoryEvent();
    createCookUI();
    cookEvent();
    initCookEvent();
    createCustomerOrderUI();
}

export {sellMealsPage}