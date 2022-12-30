import { updateResourceUI } from "./controller/updateResource.js";
import {generateShopUI } from "./dynamicDOM/shopUI.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";
import { cookMeal } from "./Events/cookMeal.js";
import { starterItems} from "./Events/initItems.js"
import { createInventory } from "./dynamicDOM/inventoryUI.js";
import { itemList, recipeList } from "./player/itemList.js";
import { createRecipeList } from "./dynamicDOM/recipesUI.js";
import { createResourceBar } from "./dynamicDOM/resourceBar.js";

/* initDom();
initEvent(); */


console.log(itemList)

createResourceBar();
starterItems();
generateShopUI(itemList);
createInventory(itemList);
cookMeal(recipeList[0]);
buyIngredientEvent();
createRecipeList();
updateResourceUI();
console.log(recipeList);