import { shop } from "../player/shop.js";
import { player } from "../player/playerObject.js";

function buyIngredientEvent() {

    for (let i = 0; i < shop.getInventory.length; i++) {
        const element = shop.getInventory[i];
        document.querySelector(`#buy${element.ingredientName.replace(/ /g, '')}Btn`).addEventListener('click', () => {
            player.setInventory = element;
            console.log(player.inventory);

        });
    }
}

export { buyIngredientEvent }