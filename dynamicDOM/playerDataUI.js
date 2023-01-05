import { player } from "../player/playerObject.js";

function playerDataUI() {
    const main = document.querySelector('main');

    // name
    let playerDataContainer = document.createElement('div');
    playerDataContainer.className = 'playerDataContainer';

    let playerDataTitle = document.createElement('div');
    playerDataTitle.textContent = `${player.saveData.getName}`;

    let playerDataLevel = document.createElement('div');
    playerDataLevel.textContent = `Level: `;

    let playerLevelProgress = document.createElement('div');
    playerLevelProgress.textContent = `Experience: // add a bar here`;

    let playerPlaytime = document.createElement('div');
    playerPlaytime.textContent = 'Playtime: ';





    playerDataContainer.append(playerDataTitle, playerDataLevel, playerLevelProgress, playerPlaytime);

    main.append(playerDataContainer);

}

export {playerDataUI}