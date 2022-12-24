import { player } from "../player/playerObject.js";
import {updateStructures} from "../dynamicDOM/updateUI.js";
import {updateStatusBar} from "../dynamicDOM/updateUI.js";
import { playerError } from "../Events/errorEvent.js";


function buildHouse() {
    document.querySelector('.buildBtn').addEventListener('click', () => {
        if(player.resource.refinedResource.getNails < 10 || player.resource.refinedResource.getPlank < 10) {
            console.log('not enough resources');
            playerError(document.querySelector('.main'), 'Not enough nails');
            return;
        }
        player.resource.refinedResource.setNails = -10;
        player.resource.refinedResource.setPlank = -10;
        player.structures.setHouse = 1;
        updateStructures();
        updateStatusBar();
    });
}



export {buildHouse}