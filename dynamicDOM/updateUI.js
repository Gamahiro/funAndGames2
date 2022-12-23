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



function updateStatusBar() {
    document.querySelector('#gold').textContent = `Gold: ${player.resource.currency.getGold}`;
    document.querySelector('#houses').textContent = `Houses: ${player.structures.getHouse}`;
    document.querySelector('#woodStatus').textContent = `Wood: ${player.resource.rawResource.getWood}`;
    document.querySelector('#plankStatus').textContent = `Planks: ${player.resource.refinedResource.getPlank}`;
    document.querySelector('#metalStatus').textContent = `Metal: ${player.resource.rawResource.getMetal}`;
    document.querySelector('#nailStatus').textContent = `Nails: ${player.resource.refinedResource.getNails}`;

}









export{updateStatusBar, updateResources, updateStructures, updateItems}