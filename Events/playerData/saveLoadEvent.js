import { updateResourceUI } from "../../controller/updateResource.js";
import { savePlayer, loadPlayer, deleteSaveData } from "../../Events/playerData/localStorage.js";
import { landingPage } from "../../UI/landingPage/landingPage.js";
import { noSavePage } from "../../UI/landingPage/newSaveLandingPage.js";

function saveLoadGame(saveName) {

    document.querySelector('#saveGame').addEventListener('click', () => {
    if(saveName === undefined) saveName = 'defaultSave';
        savePlayer(saveName);
        alert(`Game saved as ${saveName}`);
    });

    document.querySelector('#loadGame').addEventListener('click', () => {
        if(saveName === undefined) saveName = 'defaultSave';
        loadPlayer(saveName);
        alert(`${saveName} loaded`);
        document. location. reload()
    });

    document.querySelector('#delSaveTab').addEventListener('click', () => {
        deleteSaveData('defaultSave');
        alert(`savedata deleted`);
        document. location. reload()
    })

}

export {saveLoadGame}