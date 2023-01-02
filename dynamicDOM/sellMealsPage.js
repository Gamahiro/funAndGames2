import { createGameWindow } from "./createGameWindow.js";
import { createInventory } from "./inventoryUI.js";
import { createRecipeList } from "./recipesUI.js";

function sellMealsPage() {
    let main = document.querySelector('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    createGameWindow();
    createInventory();
    createRecipeList();
}

export {sellMealsPage}