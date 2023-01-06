import { updateResourceUI } from "./controller/updateResource.js";
import { buyIngredientEvent } from "./Events/ingredientShop/buyIngredient.js";
import { starterItems} from "./Events/initItems.js"
import {createCustomerOrder} from "./Events/cooking/customerOrder.js";
import { initDom } from "./dynamicDOM/initUI.js";
import { buyIngredientsPage } from "./dynamicDOM/ingredientShop/buyIngredientsPage.js";
import { tabEvents } from "./Events/tabEvents.js";
import { initInventoryEvent } from "./Events/inventoryEvent.js";
import { noSavePage } from "./dynamicDOM/landingPage/newSaveLandingPage.js";
import { createCustomerOrderUI } from "./dynamicDOM/sellMeals/customerOrderUI.js";


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
createCustomerOrderUI();