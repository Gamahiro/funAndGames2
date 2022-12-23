import { player } from "../player/playerObject.js";
function updateResources() {
    document.querySelector('#wood').textContent = `Wood: ${player.resource.rawResource.getWood}`;
    document.querySelector('#plank').textContent = `Plank: ${player.resource.refinedResource.getPlank}`;
    document.querySelector('#metal').textContent = `Metal: ${player.resource.rawResource.getMetal}`;
    document.querySelector('#nail').textContent = `Nails: ${player.resource.refinedResource.getNails}`;
}

function updateStructures() {
    document.querySelector('#house').textContent = `Houses: ${player.structures.getHouse}`;
}

function updateItems() {
    document.querySelector('#arrow').textContent = `Arrows: ${player.items.tradeitems.getArrow}`;
    document.querySelector('#chair').textContent = `Chairs: ${player.items.tradeitems.getChair}`;
}

function activeBorder(DOMElem) {
    document.querySelectorAll('.resource').forEach(element => {
        element.style.border = 'none';
    });

    DOMElem.style.border = '2px solid green';
}

function updateStatusBar() {
    document.querySelector('#gold').textContent = `Gold: ${player.resource.currency.getGold}`;
    document.querySelector('#houses').textContent = `Houses: ${player.structures.getHouse}`;
    document.querySelector('#woodStatus').textContent = `Wood: ${player.resource.rawResource.getWood}`;
    document.querySelector('#plankStatus').textContent = `Planks: ${player.resource.refinedResource.getPlank}`;
    document.querySelector('#metalStatus').textContent = `Metal: ${player.resource.rawResource.getMetal}`;
    document.querySelector('#nailStatus').textContent = `Nails: ${player.resource.refinedResource.getNails}`;

}

function createResourceCollectUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const resourceTitle = document.createElement('div');
    resourceTitle.className = 'menuTitle';
    resourceTitle.textContent = 'Resources:';
    
    const woodResource = document.createElement('div');
    woodResource.className = 'resource';
    woodResource.id = 'wood';
    woodResource.textContent = 'Wood: ';

    const plankResource = document.createElement('div');
    plankResource.className = 'resource';
    plankResource.id = 'plank';
    plankResource.textContent = 'Planks: ';

    const metalResource = document.createElement('div');
    metalResource.className = 'resource';
    metalResource.id = 'metal';
    metalResource.textContent = 'Metal: ';

    const nailsResource = document.createElement('div');
    nailsResource.className = 'resource';
    nailsResource.id = 'nail';
    nailsResource.textContent = 'Nails: ';

    const collectBtn = document.createElement('button');
    collectBtn.className = 'collectBtn';
    collectBtn.textContent = 'Collect!';

    document.querySelector('.main').append(resourceTitle, woodResource, plankResource, metalResource, nailsResource, collectBtn);
    updateResources();
}

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

function createTradeUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const tradeTitle = document.createElement('div');
    tradeTitle.className = 'menuTitle';
    tradeTitle.textContent = 'Trading';

    const item1 = document.createElement('div');
    item1.style.display = 'flex';

    const arrow = document.createElement('div');
    arrow.className = 'resource';
    arrow.id = 'arrow';
    arrow.textContent = 'Arrows: ';

    const arrowSellBtn = document.createElement('button');
    arrowSellBtn.className = 'arrowSell';
    arrowSellBtn.textContent = 'Sell 1';

    item1.append(arrow, arrowSellBtn);

    const item2 = document.createElement('div');
    item2.style.display = 'flex';

    const chair = document.createElement('div');
    chair.className = 'resource';
    chair.id = 'chair';
    chair.textContent = 'Chairs: ';

    const chairSellBtn = document.createElement('button');
    chairSellBtn.className = 'chairSell';
    chairSellBtn.textContent = 'Sell 1';

    item2.append(chair, chairSellBtn);

    const sellBtn = document.createElement('button');
    sellBtn.className = 'sellBtn';
    sellBtn.textContent = 'Sell';

    main.append(tradeTitle, item1, item2, sellBtn);

    /* player.items.tradeitems.forEach(element => {
        let item = document.createElement('div');
        item.className = 'resource';
        item.id = `${element.name}`;
        item.textContent = `${element.name}: ${element}`;
    }) */

}

export{updateStatusBar, updateResources, activeBorder, createResourceCollectUI, createStructuresBuildUI, createCraftUI, updateStructures, updateItems, createTradeUI}