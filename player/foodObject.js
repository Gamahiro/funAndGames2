
function IngredientObject (id, ingredientName, price, type, playerAmount, shopAmount) {
    this.id = id;
    this.ingredientName = ingredientName;
    this.price = price;
    this.type = type;
    this.playerAmount = playerAmount;
    this.setPlayerAmount = function (num) {
        this.playerAmount += num;
    }
    this.shopAmount = shopAmount;
    this.setShopAmount = function (num) {
        this.shopAmount += num;
    }
}

function MealObject(mealName, price, type, ingredients)  {
    this.mealName = mealName;
    this.price = price;
    this.type = type;
    this.ingredients = ingredients;
}


export {IngredientObject, MealObject}