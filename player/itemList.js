
let itemList =  [];

let recipeList = [];

let selectedList = [];

let currentOrder = [];


function setItemList(newItemList) {
    itemList = newItemList;
}

function setRecipeList(newRecipeList) {
    recipeList = newRecipeList;
}

function updateCurrentOrder(newOrder) {
    currentOrder = newOrder;
}

function updateSelectedList(newList) {
    selectedList = newList;
}

export {itemList, recipeList, 
    selectedList, updateSelectedList, 
    currentOrder, updateCurrentOrder,
    setItemList, setRecipeList}