import { createGameWindow } from "./createGameWindow.js";
import { createInventory } from "./inventoryUI.js";
import { generateShopUI } from "./shopUI.js";

function buyIngredientsPage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    createGameWindow();
    createInventory();
    generateShopUI();
}

export {buyIngredientsPage}