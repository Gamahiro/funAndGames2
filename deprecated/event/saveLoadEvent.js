import { savePlayer, loadPlayer } from "../Events/localStorage.js";

function saveLoadGame(saveName) {

    document.querySelector('#saveBtn').addEventListener('click', () => {
    if(saveName === undefined) saveName = 'defaultSave';
        savePlayer(saveName);
        alert(`Game saved as ${saveName}`);
    });

    document.querySelector('#loadBtn').addEventListener('click', () => {
        if(saveName === undefined) saveName = 'defaultSave';
        loadPlayer(saveName);
        alert(`${saveName} loaded`);
    });

}

export {saveLoadGame}