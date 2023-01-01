import { createPopUI } from "./recruitPopUI.js";
import {createResourceBar} from "./resourceBar.js";
import { createMenuTabs } from "./menuTabs.js";
import { createGFX } from "./createGFX.js";


function initDom() {

    const content = document.createElement('div');
    content.className = 'content';

    document.body.appendChild(content);
    
    const main = document.createElement('div');
    main.className = 'main';

    const welcomeMsg = document.createElement('div');
    welcomeMsg.textContent = 'Welcome to the game!';
    welcomeMsg.style.fontWeight = 'bold';
    welcomeMsg.style.backgroundColor = 'aliceblue';
    welcomeMsg.style.textAlign = 'center';
    main.append(welcomeMsg);

    



    createResourceBar();
    createMenuTabs();
    content.append(main);
    createGFX();
    createPopUI();

    const footer = document.createElement('div');
    footer.textContent = 'The Gamahiro Project © 2022';
    footer.style.textAlign = 'center';
    footer.style.backgroundColor = 'aliceblue';
    footer.style.fontWeight = 'bold';
    footer.style.padding = '3px';

    document.body.append(footer);
}

export { initDom }