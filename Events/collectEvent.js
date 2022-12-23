import { updateResources, activeBorder } from "../dynamicDOM/updateUI.js";
import { player } from "../player/playerObject.js";

let resourceID = 0;



function selectResource() {
    document.querySelector('#wood').addEventListener('click', () => {
        resourceID = 0;
        activeBorder(document.querySelector('#wood'));
    });

    document.querySelector('#plank').addEventListener('click', () => {
        resourceID = 1;
        activeBorder(document.querySelector('#plank'));
    })
    document.querySelector('#metal').addEventListener('click', () => {
        resourceID = 2;
        activeBorder(document.querySelector('#metal'));
    })
    document.querySelector('#nail').addEventListener('click', () => {
        resourceID = 3;
        activeBorder(document.querySelector('#nail'));
    })
}

function collectResource() {
    document.querySelector('.collectBtn').addEventListener('click', () => {

        if (resourceID === 0) {
            player.resource.rawResource.setWood = 1;
        }
        else if (resourceID === 1) {
            if (player.resource.rawResource.getWood < 1) {
                console.log(`You need 10 of a resource to refine. You have ${player.resource.rawResource.getWood} wood`);
                return
            }
            player.resource.rawResource.setWood = -1;
            player.resource.refinedResource.setPlank = 1;
        }
        else if (resourceID === 2) {
            player.resource.rawResource.setMetal = 1;
        }
        else if (resourceID === 3) {
            if (player.resource.rawResource.getMetal < 1) {
                console.log(`You need 10 of a resource to refine. You have ${player.resource.rawResource.getMetal} metal`);
                return;
            }
            player.resource.refinedResource.setNails = 1;
            player.resource.rawResource.setMetal = -1;
        }
        updateResources();
    });
}

function collectEvent() {
    selectResource();
    collectResource();
}

export {collectEvent}