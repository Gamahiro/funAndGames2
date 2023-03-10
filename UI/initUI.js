import {createResourceBar} from "./resourceBar.js";
import { createMenuTabs } from "./menuTabs.js";
import { createInventory } from "./inventoryUI.js";
import { createRecipeList } from "./sellMeals/recipesUI.js";
import { generateShopUI } from "./ingredientShop/shopUI.js";
import { createGameWindow } from "./gameWindowUI.js";


function initDom() {

    const content = document.createElement('div');
    content.className = 'content';
    

    document.body.appendChild(content);
    
    createResourceBar();
    createMenuTabs();
    createGameWindow();   

    const main = document.createElement('main');
    content.append(main);


    const footer = document.createElement('footer');
    footer.textContent = 'The Gamahiro Project © 2022';

    document.body.append(footer);
}

export { initDom }