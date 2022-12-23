import { activeBorder } from "../dynamicDOM/utilityUI.js";
import { player } from "../player/playerObject.js";

let populationID = 0;


function selectItem() {
    document.querySelector('.foresterBtn').addEventListener('click', () => {
        populationID = 0;
        recruitPop();
    });

    document.querySelector('.minerBtn').addEventListener('click', () => {
        populationID = 1;
        recruitPop();
    });
}

function recruitPop() {
        if (populationID === 0) {
            if(player.resource.currency.getGold < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setForester = 1;
        }

        if (populationID === 1) {
            if(player.resource.currency.getGold < 1) {
                console.log('Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setMiner = 1;
        }
}

function recruitEvent() {
    selectItem();
}

export {recruitEvent}