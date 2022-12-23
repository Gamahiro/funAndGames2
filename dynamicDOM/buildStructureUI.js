import { updateStructures } from "./updateUI.js";
function createStructuresBuildUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }
    
    const buildTitle = document.createElement('div');
    buildTitle.className = 'menuTitle';
    buildTitle.textContent = 'Structures';
    
    const house = document.createElement('div');
    house.className = 'resource';
    house.id = 'house';
    house.textContent = 'Houses: ';

    const buildBtn = document.createElement('button');
    buildBtn.className = 'buildBtn';
    buildBtn.textContent = 'Build!';
    main.append(buildTitle, house, buildBtn);
    updateStructures();
}

export {createStructuresBuildUI}