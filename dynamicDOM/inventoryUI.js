import { itemList } from "../player/itemList.js";


function createInventory() {
const inventory = document.createElement('div');
inventory.className = 'inventoryContainer';

const inventoryTitle = document.createElement('div');
inventoryTitle.textContent = 'Inventory';

inventory.append(inventoryTitle);

    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];

        console.log(element)

        let inventoryItem = document.createElement('div');
        inventoryItem.className = 'foodItem';
        inventoryItem.id = `${element.ingredientName.replace(/ /g, '')}Name`;

        let itemPlayerAmount = document.createElement('span');
        itemPlayerAmount.id = `${element.ingredientName.replace(/ /g, '')}Amount`;
        itemPlayerAmount.textContent = `${element.playerAmount} x `;

        let itemName = document.createElement('span');
        itemName.textContent = `${element.ingredientName}`;

        inventoryItem.append(itemPlayerAmount, itemName);
        inventory.append(inventoryItem);
        
    }
document.querySelector('main').append(inventory);

}



export {createInventory}