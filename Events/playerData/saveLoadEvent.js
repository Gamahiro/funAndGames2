import { savePlayer, loadPlayer } from "../../Events/playerData/localStorage.js";

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
    });

}

export {saveLoadGame}