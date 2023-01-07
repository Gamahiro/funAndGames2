import { player } from "../player/playerObject.js";

function updateResourceUI() {
    document.querySelector('#money').textContent = player.saveData.getMoney;
}

export {updateResourceUI}