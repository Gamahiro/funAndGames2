import { playerError } from "../../Events/errorEvent.js";
import { player } from "../../player/playerObject.js";
import { createGameWindow } from "../gameWindowUI.js";
import { landingPage } from "./landingPage.js";
import { newPlayerUI } from "./newPlayerUI.js";


function noSavePage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    newPlayerUI();
    document.querySelector('#submitNameBtn').addEventListener('click', (e) => {
        e.preventDefault();
        let stringLength = document.querySelector('#nameInput').value.length;
        
        if( stringLength > 16 || stringLength < 2) {        
            return playerError(document.querySelector('#nameInput').parentElement, 'Too long or too short name');
        }
        player.saveData.setName = document.querySelector('#nameInput').value;
        console.log(player.saveData.getName)
        landingPage();
    })
}

export {noSavePage}