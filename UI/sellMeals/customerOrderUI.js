import { currentOrder } from "../../player/itemList.js";
import { clearGameWindow } from "../gameWindowUI.js";


function createCustomerOrderUI() {


    clearGameWindow();

    const gameWindow = document.querySelector('.gameWindow');
    
    let orderContainer = document.createElement('div');
    orderContainer.className = 'orderContainer';

    let orderImage = document.createElement('img');
    orderImage.id = 'orderImage';

    let orderText = document.createElement('div');
    orderText.textContent = `Hello, I would like a ...`;
    
    let orderName = document.createElement('div');
    orderName.id = 'orderName';
    orderName.textContent = `${currentOrder.mealName}`;

    orderContainer.append(orderImage, orderText, orderName);

    gameWindow.append(orderContainer);

}

export {createCustomerOrderUI}