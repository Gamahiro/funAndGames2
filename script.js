import { updateResourceUI } from "./controller/updateResource.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";
import { starterItems} from "./Events/initItems.js"
import {createCustomerOrder} from "./Events/customerOrder.js";
import { initDom } from "./dynamicDOM/initUI.js";
import { buyIngredientsPage } from "./dynamicDOM/buyIngredientsPage.js";
import { tabEvents } from "./Events/tabEvents.js";
import { initInventoryEvent } from "./Events/inventoryEvent.js";
import { noSavePage } from "./dynamicDOM/newSaveLandingPage.js";


/* initDom();
initEvent(); */


starterItems();
initDom();
tabEvents();
buyIngredientsPage();
buyIngredientEvent()
updateResourceUI();
createCustomerOrder();
initInventoryEvent();
noSavePage();