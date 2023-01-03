import { itemList } from "../player/itemList.js";

function generateShopUI() {

    
    const shopWindow = document.createElement('div');
    shopWindow.className = 'shopWindow';

    const welcomeMsg = document.createElement('div');
    welcomeMsg.textContent = `Shop`;

    shopWindow.append(welcomeMsg);
    
    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];

        const foodItemContainer = document.createElement('div');
        foodItemContainer.className = 'shopItem';

        const foodItemPrice = document.createElement('div');
        foodItemPrice.textContent = `Price: ${element.price} $`;
        
        const foodItemName = document.createElement('div');
        foodItemName.textContent = `${element.ingredientName}`;

        const shopAmount = document.createElement('div');
        shopAmount.textContent = `Stock: ${element.shopAmount}`;
        shopAmount.id = `${element.ingredientName.replace(/ /g, '')}Stock`;

        const buyButton = document.createElement('button');
        buyButton.id = `buy${element.ingredientName.replace(/ /g, '')}Btn`;
        buyButton.textContent = 'Buy 1';

        
        
        foodItemContainer.append(foodItemName, foodItemPrice, shopAmount, buyButton);
        shopWindow.append(foodItemContainer);
    }
    document.querySelector('main').append(shopWindow);
}

export {generateShopUI}