import { updateItems } from "./updateUI.js";

function createCraftUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const craftTitle = document.createElement('div');
    craftTitle.className = 'menuTitle';
    craftTitle.textContent = 'Crafting';

    const arrow = document.createElement('div');
    arrow.className = 'resource';
    arrow.id = 'arrow';
    arrow.textContent = 'Arrows: ';

    const chair = document.createElement('div');
    chair.className = 'resource';
    chair.id = 'chair';
    chair.textContent = 'Chairs: ';

    const craftBtn = document.createElement('button');
    craftBtn.className = 'craftBtn';
    craftBtn.textContent = 'Craft!';

    main.append(craftTitle, arrow, chair, craftBtn);
    updateItems();
}

export {createCraftUI}