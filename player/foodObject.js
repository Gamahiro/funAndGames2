
function IngredientObject (id, ingredientName, price, type, playerAmount, shopAmount, imageSrc) {
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
    this.imageSrc = imageSrc;

}

function MealObject(mealName, price, type, ingredients)  {
    this.mealName = mealName;
    this.price = price;
    this.type = type;
    this.ingredients = ingredients;
}


export {IngredientObject, MealObject}