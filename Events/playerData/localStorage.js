import { itemList, recipeList, setItemList, setRecipeList } from "../../player/itemList.js";
import { player, setPlayer } from "../../player/playerObject.js";

let newPlayerObject = {
    newPlayer: player,
        get getNewPlayer() {
            return this.newPlayer;
        },
    newItemList: itemList,
        get getNewItemList() {
            return this.newItemList;
        },
    newRecipeList: recipeList,
        get getNewRecipeList() {
            return this.newRecipeList;
        }
}


function savePlayer(saveName) {
    if(localStorage.getItem(saveName)) localStorage.removeItem(saveName);
    localStorage.setItem(saveName, JSON.stringify(newPlayerObject));
}


function loadPlayer(saveName) {
    const loadStringData = localStorage.getItem(saveName);
    const loadData = JSON.parse(loadStringData);

    console.log('load data:')
    console.log(loadData);

    player.saveData.setName = loadData.newPlayer.saveData.name;
    player.saveData.setMoney = loadData.newPlayer.saveData.getMoney;

    setItemList(loadData.getNewItemList);
    setRecipeList(loadData.getNewRecipeList);
}


export {savePlayer, loadPlayer}