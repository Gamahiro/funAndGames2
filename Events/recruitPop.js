import { updateItems } from "../dynamicDOM/updateUI.js";
import { activeBorder } from "../dynamicDOM/utilityUI.js";
import { player } from "../player/playerObject.js";

let populationID = 0;


function selectItem() {
    document.querySelector('#forester').addEventListener('click', () => {
        itemID = 0;
        activeBorder(document.querySelector('#forester'));
    });

    document.querySelector('#miner').addEventListener('click', () => {
        itemID = 1;
        activeBorder(document.querySelector('#miner'));
    });
}

function recruitPop() {
    document.querySelector('.recruitBtn').addEventListener('click', () => {

        if (itemID === 0) {
            if(player.resource.currency.getGold < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setForester = 1;
        }

        if (itemID === 1) {
            if(player.resource.currency.getGold < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setMiner = 1;
        }
        updatePop();
    });
}

function recruitEvent() {
    recruitPop();
    selectItem();
}

export {recruitEvent}