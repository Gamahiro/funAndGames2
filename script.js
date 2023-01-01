import { updateResourceUI } from "./controller/updateResource.js";
import {generateShopUI } from "./dynamicDOM/shopUI.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";
import { cookMeal } from "./Events/cookMeal.js";
import { starterItems} from "./Events/initItems.js"
import { createInventory } from "./dynamicDOM/inventoryUI.js";
import { itemList, recipeList } from "./player/itemList.js";
import { createRecipeList } from "./dynamicDOM/recipesUI.js";
import { createResourceBar } from "./dynamicDOM/resourceBar.js";
import {createCustomerOrder} from "./Events/customerOrder.js";
import itemData from "./player/itemList.json" assert {type: 'json'};

/* initDom();
initEvent(); */




 
starterItems();
console.log(itemList)
console.log(recipeList)

createResourceBar();
generateShopUI(itemList);
createInventory(itemList);
buyIngredientEvent();
createRecipeList();
updateResourceUI();
createCustomerOrder();