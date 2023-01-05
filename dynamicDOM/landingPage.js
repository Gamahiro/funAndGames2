import { createGameWindow } from "./createGameWindow.js";
import { createInventory } from "./inventoryUI.js";
import { playerDataUI } from "./playerDataUI.js";


function landingPage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    createGameWindow();
    const gameWindow = document.querySelector('.gameWindow');

    playerDataUI();
}

export {landingPage}