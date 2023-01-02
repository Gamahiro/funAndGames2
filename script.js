import { updateResourceUI } from "./controller/updateResource.js";
import {generateShopUI } from "./dynamicDOM/shopUI.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";
import { cookMeal } from "./Events/cookMeal.js";
import { starterItems} from "./Events/initItems.js"
import { createInventory } from "./dynamicDOM/inventoryUI.js";
import { createRecipeList } from "./dynamicDOM/recipesUI.js";
import { createResourceBar } from "./dynamicDOM/resourceBar.js";
import {createCustomerOrder} from "./Events/customerOrder.js";
import itemData from "./player/itemList.json" assert {type: 'json'};
import { initDom } from "./dynamicDOM/initUI.js";
import { sellMealsPage } from "./dynamicDOM/sellMealsPage.js";
import { buyIngredientsPage } from "./dynamicDOM/buyIngredientsPage.js";
import { createMenuTabs } from "./dynamicDOM/menuTabs.js";
import { tabEvents } from "./Events/tabEvents.js";


/* initDom();
initEvent(); */


starterItems();
initDom();
tabEvents();
buyIngredientsPage();
buyIngredientEvent()
updateResourceUI();
createCustomerOrder();