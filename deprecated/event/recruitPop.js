import { playerError } from "../Events/errorEvent.js";
import { player } from "../player/playerObject.js";
import { countPops } from "../dynamicDOM/recruitPopUI.js";

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
                playerError(document.querySelector('.populationContainer'), 'Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setForester = 1;
            countPops(player.population.worker.getForester, document.querySelector('#foresterCounter'));
        }

        if (populationID === 1) {
            if(player.resource.currency.getGold < 1) {
                playerError(document.querySelector('.populationContainer'), 'Not enough resources');
                return;
            }
            player.resource.currency.setGold= -1;
            player.population.worker.setMiner = 1;
            countPops(player.population.worker.getMiner, document.querySelector('#minerCounter'));
        }
}

function recruitEvent() {
    selectItem();
}

export {recruitEvent}