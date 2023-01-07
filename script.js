import { updateResourceUI } from "./controller/updateResource.js";
import { buyIngredientEvent } from "./Events/ingredientShop/buyIngredient.js";
import { starterItems} from "./Events/init/initItems.js"
import {createCustomerOrder} from "./Events/cooking/customerOrder.js";
import { initDom } from "./UI/initUI.js";
import { buyIngredientsPage } from "./UI/ingredientShop/buyIngredientsPage.js";
import { tabEvents } from "./Events/init/tabEvents.js";
import { initInventoryEvent } from "./Events/inventoryEvent.js";
import { noSavePage } from "./UI/landingPage/newSaveLandingPage.js";
import { createCustomerOrderUI } from "./UI/sellMeals/customerOrderUI.js";
import { loadPlayer } from "./Events/playerData/localStorage.js";


/* initDom();
initEvent(); */

loadPlayer('defaultSave');
starterItems();
initDom();
tabEvents();
buyIngredientsPage();
buyIngredientEvent()
updateResourceUI();
initInventoryEvent();
noSavePage();
createCustomerOrder();