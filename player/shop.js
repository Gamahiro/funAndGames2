


const shop = {
    inventory: [],
        set pushInventory(ingredientObject) {
            this.inventory.push(ingredientObject);
        },
        get getInventory() {
            return this.inventory;
        },
        clearInventory() {
            this.inventory = [];
        }
}

export {shop}