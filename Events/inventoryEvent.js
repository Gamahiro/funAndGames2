import { sellMealsPage } from "../dynamicDOM/sellMealsPage.js";
import { activeBorder } from "../dynamicDOM/utilityUI.js";
import { itemList, selectedList, updateSelectedList } from "../player/itemList.js";
import { playerError } from "./errorEvent.js";

function initInventoryEvent() {
    itemList.forEach(element => {
        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`).addEventListener('click', () => {
            activeBorder(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`));
            if(element.playerAmount < 1) {
            return playerError(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`), `You don't have enough ${element.ingredientName}`);
            }
            else if(selectedList.length > 3) {
                return playerError(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Name`), `Max 4 Ingredients`);
            }

            
            else if(!selectedList.includes(element)) {
                selectedList.push(element);
                sellMealsPage();
            }
            
        });
    });
}

function initCookEvent() {
    selectedList.forEach(element => {

        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Select`).addEventListener('click', () => {
            activeBorder(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Select`));
            
            updateSelectedList(selectedList.filter(elem => elem !== element));
            sellMealsPage();
        });
    });
}


export {initInventoryEvent, initCookEvent}