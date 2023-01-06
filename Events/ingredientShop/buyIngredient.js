import { itemList } from "../../player/itemList.js";
import { player } from "../../player/playerObject.js";
import { updateResourceUI } from "../../controller/updateResource.js";
import { playerError } from "../../Events/errorEvent.js";

function buyIngredientEvent() {

    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];
        let btn = document.querySelector(`#buy${element.ingredientName.replace(/ /g, '')}Btn`);
        btn.addEventListener('click', () => {
            if(element.shopAmount < 1) return playerError(btn.parentElement, `${element.ingredientName} is out of stock!`);
            if(player.getMoney < element.price) return playerError(btn.parentElement, `You can't afford that`);
            element.setShopAmount(-1);
            element.setPlayerAmount(1);
            player.setMoney = - element.price;
            document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Amount`).textContent = `${element.playerAmount} x `;
            document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Stock`).textContent = `Stock: ${element.shopAmount}`;
            updateResourceUI();
        });
    }
}

export { buyIngredientEvent }