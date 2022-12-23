import { updateItems } from "../dynamicDOM/updateUI.js";
import { activeBorder } from "../dynamicDOM/utilityUI.js";
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

function sellItem() {
    document.querySelector('.sellBtn').addEventListener('click', () => {

        if (itemID === 0) {
            if(player.items.tradeitems.getArrow < 1) {
                console.log('Not enough resources');
                return;
            }
            player.items.tradeitems.setArrow = -1;
            player.resource.currency.setGold = 2;
        }

        if (itemID === 1) {
            if(player.items.tradeitems.getChair < 1) {
                console.log('Not enough resources');
                return;
            }
            player.items.tradeitems.setChair = -1;
            player.resource.currency.setGold = 2;
        }
        updateItems();
    });
}

function tradeEvent() {
    sellItem();
    selectItem();
}

export {tradeEvent}