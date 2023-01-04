import { player } from "../player/playerObject.js";
import { createGameWindow } from "./createGameWindow.js";
import { newPlayerUI } from "./newPlayerUI.js";


function noSavePage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    createGameWindow();
    newPlayerUI();
    document.querySelector('#submitNameBtn').addEventListener('click', (e) => {
        e.preventDefault();
        player.saveData.setName = document.querySelector('#nameInput').value;
    })
}

export {noSavePage}