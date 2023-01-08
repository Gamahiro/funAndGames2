import { itemList } from "../../player/itemList.js";


function restockIngredients(restockAmount) {
    itemList.forEach(element => {
        if(element.shopAmount >= 20) {
            return;
        }
        element.setShopAmount(restockAmount);
        if(document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Stock`))
        document.querySelector(`#${element.ingredientName.replace(/ /g, '')}Stock`).textContent = `Stock: ${element.shopAmount}`;
    });
}

export {restockIngredients}