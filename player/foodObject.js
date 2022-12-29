
function ingredientObject (ingredientName, price, type) {
    this.ingredientName = ingredientName;
    this.price = price;
    this.type = type;
}

function mealObject(mealName, price, type, ingredients)  {
    this.mealName = mealName;
    this.price = price;
    this.type = type;
    this.ingredients = ingredients;
}

export {ingredientObject, mealObject}