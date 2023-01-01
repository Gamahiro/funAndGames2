import { selectedList } from "../player/itemList.js";

// on player select event push ingredient to selectedList

//on cookEvent use selectedlist to cross refer with customerOrder

//finally empty selectedList

function playerSelectIngredient(...ingredients) {

    ingredients.forEach(element => {
        selectedList.push(element);        
    });

    
}