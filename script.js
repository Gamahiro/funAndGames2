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
import { deleteSaveData, loadPlayer } from "./Events/playerData/localStorage.js";
import { itemList } from "./player/itemList.js";
import { landingPage } from "./UI/landingPage/landingPage.js";


/* initDom();
initEvent(); */
//deleteSaveData('defaultSave')
starterItems();
initDom();
if(!localStorage.getItem('defaultSave')) {
    noSavePage();
} else {
    loadPlayer('defaultSave');
    landingPage();
}
tabEvents();
buyIngredientsPage();
buyIngredientEvent()
updateResourceUI();
initInventoryEvent();
createCustomerOrder();