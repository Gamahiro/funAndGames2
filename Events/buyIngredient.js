import { itemList } from "../player/itemList.js";
import { player } from "../player/playerObject.js";
import { updateResourceUI } from "../controller/updateResource.js";

function buyIngredientEvent() {

    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];
        document.querySelector(`#buy${element.ingredientName.replace(/ /g, '')}Btn`).addEventListener('click', () => {
            if(element.shopAmount < 1) return console.log(`${element.ingredientName} is out of stock!`);
            element.setShopAmount(-1);
            element.setPlayerAmount(1);
            player.setMoney = - element.price;
            document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Amount`).textContent = `${element.playerAmount} x `;
            updateResourceUI();
        });
    }
}

export { buyIngredientEvent }