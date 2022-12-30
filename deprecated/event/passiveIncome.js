import { player } from "../player/playerObject.js";
import {updateStatusBar} from "../dynamicDOM/updateUI.js"



// worker amount
function workerIncome() {
    const woodIncome = player.population.worker.getForester;
    const metalIncome = player.population.worker.getMiner;
    console.log(`${metalIncome} metal ${woodIncome} wood`);

    if(woodIncome !== 0) 
        player.resource.rawResource.setWood = woodIncome;
        updateStatusBar();
    
    if(metalIncome !== 0)
    player.resource.rawResource.setMetal = metalIncome;
    updateStatusBar();
}

export {workerIncome}