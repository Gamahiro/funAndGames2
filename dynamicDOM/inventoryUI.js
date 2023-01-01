
function createInventory(itemList) {
const inventory = document.createElement('div');
inventory.className = 'inventoryContainer';

    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i];

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
document.body.append(inventory);

}



export {createInventory}