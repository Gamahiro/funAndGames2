import { player } from "../player/playerObject.js";

function updateResourceUI() {
    document.querySelector('#money').textContent = player.getMoney;
}

export {updateResourceUI}