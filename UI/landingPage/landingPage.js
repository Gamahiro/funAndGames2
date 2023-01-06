import { createGameWindow } from "../gameWindowUI.js";
import { createInventory } from "../inventoryUI.js";
import { playerDataUI } from "./playerDataUI.js";


function landingPage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }


    playerDataUI();
}

export {landingPage}