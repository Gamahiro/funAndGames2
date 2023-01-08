import { currentOrder, itemList, recipeList, setItemList, setRecipeList, updateCurrentOrder } from "../../player/itemList.js";
import { player, setPlayer } from "../../player/playerObject.js";
import { createCustomerOrder } from "../cooking/customerOrder.js";
import { getRecipeFromIngredients } from "../utility.js";



function savePlayer(saveName) {
console.log(itemList);
    let saveObject = {
        player: {
        money: player.saveData.getMoney,
        name: player.saveData.getName
    },
    itemList: itemList,
    recipeList: recipeList,
    currentOrder: currentOrder
}

    if(localStorage.getItem(saveName)) localStorage.removeItem(saveName);
    localStorage.setItem(saveName, JSON.stringify(saveObject));
}


function loadPlayer(saveName) {

    try {
    if(localStorage.getItem(saveName)) {    
    const loadStringData = localStorage.getItem(saveName);
    const loadData = JSON.parse(loadStringData);

    player.saveData.setName = loadData.player.name;
    player.saveData.money = loadData.player.money;


    setItemList(loadData.itemList);
    setRecipeList(loadData.recipeList)

    if(!loadData.currentOrder[0]) return createCustomerOrder();
    updateCurrentOrder(getRecipeFromIngredients(loadData.currentOrder.ingredients));
}
    } catch (error) {
        console.log(error);
    }
    
}

function deleteSaveData(saveName) {
    localStorage.removeItem(saveName)
}


export {savePlayer, loadPlayer, deleteSaveData}