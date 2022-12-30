
function generateShopUI(itemList) {

    const shopWindow = document.createElement('div');

    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];

        const foodItemContainer = document.createElement('div');
        
        const foodItemName = document.createElement('div');
        foodItemName.textContent = `${element.ingredientName}`;

        const buyButton = document.createElement('button');
        buyButton.id = `buy${element.ingredientName.replace(/ /g, '')}Btn`;
        buyButton.textContent = 'Buy 1';
        
        foodItemContainer.append(foodItemName, buyButton);
        shopWindow.append(foodItemContainer);
    }
    document.body.append(shopWindow);
}

export {generateShopUI}