import {createResourceBar} from "./resourceBar.js";
import { createMenuTabs } from "./menuTabs.js";
import { createInventory } from "./inventoryUI.js";
import { createRecipeList } from "./recipesUI.js";
import { generateShopUI } from "./shopUI.js";
import { createGameWindow } from "./createGameWindow.js";


function initDom() {

    const content = document.createElement('div');
    content.className = 'content';
    

    document.body.appendChild(content);
    
    createResourceBar();
    createMenuTabs();

    const main = document.createElement('main');
    content.append(main);

    createGameWindow();   

    const footer = document.createElement('div');
    footer.textContent = 'The Gamahiro Project © 2022';
    footer.style.textAlign = 'center';
    footer.style.backgroundColor = 'aliceblue';
    footer.style.fontWeight = 'bold';
    footer.style.padding = '3px';

    document.body.append(footer);
}

export { initDom }