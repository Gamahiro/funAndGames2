import { selectedList } from "../player/itemList.js";

// on player select event push ingredient to selectedList

//on cookEvent use selectedlist to cross refer with customerOrder

//finally empty selectedList

function createPlayerSelectionList(...ingredients) {

    ingredients.forEach(element => {
        selectedList.push(element);        
    });
}

function compareIngredients(recipeIngredients, playerSelection) {

    if(recipeIngredients === playerSelection) return true;
    
    return false;

}

