import { activeBorder, updateItems } from "../dynamicDOM/updateUI.js";
import { player } from "../player/playerObject.js";

let itemID = 0;


function selectItem() {
    document.querySelector('#arrow').addEventListener('click', () => {
        itemID = 0;
        activeBorder(document.querySelector('#arrow'));
    });

    document.querySelector('#chair').addEventListener('click', () => {
        itemID = 1;
        activeBorder(document.querySelector('#chair'));
    });
}

function craftItem() {
    document.querySelector('.craftBtn').addEventListener('click', () => {

        if (itemID === 0) {
            if(player.resource.refinedResource.getPlank < 1 || player.resource.refinedResource.getNails < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.refinedResource.setPlank = -1;
            player.resource.refinedResource.setNails = -1;
            player.items.tradeitems.setArrow = 1;
        }

        if (itemID === 1) {
            if(player.resource.refinedResource.getPlank < 1 || player.resource.refinedResource.getPlank < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.refinedResource.setPlank = -1;
            player.resource.refinedResource.setNails = -1;
            player.items.tradeitems.setChair = 1;
        }
        updateItems();
    });
}

function craftEvent() {
    craftItem();
    selectItem();
}

export {craftEvent}