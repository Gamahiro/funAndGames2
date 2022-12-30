import { updateItems, updateStatusBar } from "../dynamicDOM/updateUI.js";
import { activeBorder } from "../dynamicDOM/utilityUI.js";
import { player } from "../player/playerObject.js";
import {playerError} from "../Events/errorEvent.js";

let itemID = 0;

function sellOneArrow() {
    document.querySelector('#arrowSell').addEventListener('click', () => {
        if(player.items.tradeitems.getArrow < 1) {
            playerError(document.querySelector('.main'), 'Not enough resources');
            return;
        }
        player.items.tradeitems.setArrow = -1;
        player.resource.currency.setGold = 2;
        updateItems();
    updateStatusBar();
    })
}

function sellOneChair() {
    document.querySelector('#chairSell').addEventListener('click', () => {
        if(player.items.tradeitems.getChair < 1) {
            playerError(document.querySelector('.main'), 'Not enough resources');
            return;
        }
        player.items.tradeitems.setChair = -1;
        player.resource.currency.setGold = 2;
        updateItems();
    updateStatusBar();
    })
}

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
                playerError(document.querySelector('.main'), 'Not enough resources');
                return;
            }
            player.items.tradeitems.setArrow = -1;
            player.resource.currency.setGold = 2;
        }

        if (itemID === 1) {
            if(player.items.tradeitems.getChair < 1) {
                playerError(document.querySelector('.main'), 'Not enough resources');
                return;
            }
            player.items.tradeitems.setChair = -1;
            player.resource.currency.setGold = 2;
        }
        updateItems();
    updateStatusBar();

    });
}

function tradeEvent() {
    sellOneArrow();
    sellOneChair();
    sellItem();
    selectItem();
}

export {tradeEvent}