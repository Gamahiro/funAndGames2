import { initDom } from "./dynamicDOM/initUI.js";
import { initEvent } from "./Events/initEvents.js";
import { shop } from "./player/shop.js";
import { ingredientObject } from "../player/foodObject.js";
import {generateShopUI } from "./dynamicDOM/shopUI.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";


/* initDom();
initEvent(); */

shop.pushInventory = new ingredientObject('Tomato', 2, 'Vegetable');
shop.pushInventory = new ingredientObject('Ground Beef', 5, 'Meat');
shop.pushInventory = new ingredientObject('Soft Tortilla', 2, 'Bread');
generateShopUI(shop.getInventory);
buyIngredientEvent();
console.log(shop.getInventory);
