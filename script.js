import { initDom } from "./dynamicDOM/initUI.js";
import { initEvent } from "./Events/initEvents.js";
import { shop } from "./player/shop.js";
import { ingredientObject, mealObject } from "../player/foodObject.js";
import {generateShopUI } from "./dynamicDOM/shopUI.js";
import { buyIngredientEvent } from "./Events/buyIngredient.js";
import { cookMeal } from "./Events/cookMeal.js";


/* initDom();
initEvent(); */
const tomato = new ingredientObject('Tomato', 2, 'Vegetable');
const groundBeef = new ingredientObject('Ground Beef', 5, 'Meat');
const softTortilla = new ingredientObject('Soft Tortilla', 2, 'Bread');

shop.pushInventory = tomato;
shop.pushInventory = groundBeef;
shop.pushInventory = softTortilla;
generateShopUI(shop.getInventory);
buyIngredientEvent();
const taco = new mealObject('Taco', 12, 'Taco', [tomato, groundBeef, softTortilla]);
cookMeal(taco);