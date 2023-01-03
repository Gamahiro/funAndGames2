import { activeBorder } from "../dynamicDOM/utilityUI.js";
import { itemList } from "../player/itemList.js";

function initInventoryEvent() {
    console.log(itemList)
    itemList.forEach(element => {
        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`).addEventListener('click', () => {
            activeBorder(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`));
        })
    });
}

export {initInventoryEvent}