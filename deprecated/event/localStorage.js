import { player } from "../player/playerObject.js";

function savePlayer(saveName) {
    if(localStorage.getItem(saveName)) localStorage.removeItem(saveName);
    localStorage.setItem(saveName, JSON.stringify(player));
}

function loadPlayerResources(saveName) {
    const playerPre = localStorage.getItem(saveName);
    const playerLoad = JSON.parse(playerPre);
    //raw resources
        player.resource.rawResource.setWood = playerLoad.resource.rawResource.getWood;
        player.resource.rawResource.setMetal = playerLoad.resource.rawResource.getMetal;
    //refined resources
        player.resource.refinedResource.setPlank = playerLoad.resource.refinedResource.getPlank;
        player.resource.refinedResource.setNails = playerLoad.resource.refinedResource.getNails;
 }

function loadPlayerStructures(saveName) {
    const playerPre = localStorage.getItem(saveName);
    const playerLoad = JSON.parse(playerPre);
        player.structures.setHouse = playerLoad.structures.getHouse; 
}

function loadPlayerItems(saveName) {
    const playerPre = localStorage.getItem(saveName);
    const playerLoad = JSON.parse(playerPre);
        player.items.tradeitems.setArrow = playerLoad.items.tradeitems.getArrow;
        player.items.tradeitems.setChair = playerLoad.items.tradeitems.getChair;
}

function loadPlayerPop(saveName) {
    const playerPre = localStorage.getItem(saveName);
    const playerLoad = JSON.parse(playerPre);
        player.population.worker.setForester = playerLoad.population.worker.getForester;
        player.population.worker.setMiner = playerLoad.population.worker.getMiner;
}

function loadPlayer(saveName) {
    loadPlayerResources(saveName);
    loadPlayerStructures(saveName);
    loadPlayerItems(saveName);
    loadPlayerPop(saveName);
}


export {savePlayer, loadPlayer}