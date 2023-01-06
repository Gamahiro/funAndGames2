import { recipeList } from "../../player/itemList.js";
import { cookEvent } from "../../Events/cooking/cookEvent.js";

function createRecipeList() {
    const recipeContainer = document.createElement('div');
    recipeContainer.className = 'recipeContainer';

    const recipeTitle = document.createElement('div');
    recipeTitle.textContent = 'Cook';
    recipeContainer.append(recipeTitle);

    recipeList.forEach(element => {
        let recipe = document.createElement('div');
        recipe.className = 'recipeItem';
        let recipeName = document.createElement('div');
        recipeName.textContent = element.mealName;

        let cookRecipeBtn = document.createElement('button');
        cookRecipeBtn.textContent = `Cook!`;
        cookRecipeBtn.id = `${element.mealName.replace(/ /g, '')}Recipe`;

        recipe.append(recipeName, cookRecipeBtn);
        recipeContainer.append(recipe);
        cookEvent(cookRecipeBtn, element);
    });
        document.querySelector('main').append(recipeContainer);


}

export {createRecipeList}