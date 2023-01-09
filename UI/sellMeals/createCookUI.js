import { cookEvent } from "../../Events/cooking/cookEvent.js";
import { selectedList } from "../../player/itemList.js";


function createCookUI() {


    const cookContainer = document.createElement('div');
    cookContainer.className = 'cookContainer';

    const cookTitle = document.createElement('div');
    cookTitle.textContent = 'Cook';
    cookContainer.append(cookTitle);

    selectedList.forEach(element => {
        let imgUrl = `../assets/images/${element.imageSrc}`;

        let cookItem = document.createElement('div');
        cookItem.className = 'cookItem';
        cookItem.id = `${element.ingredientName.replace(/ /g, '')}Select`;
        cookItem.style.backgroundImage = `url(${imgUrl})`;
        cookItem.style.backgroundSize = 'cover';
        let cookItemName = document.createElement('div');
        cookItemName.textContent = element.ingredientName;

        

        cookItem.append(cookItemName);
        cookContainer.append(cookItem);
    });

    let cookBtn = document.createElement('button');
        cookBtn.textContent = `Cook!`;
        cookBtn.id = `cookBtn`;
        cookContainer.append(cookBtn);


        document.querySelector('main').append(cookContainer);


}

export {createCookUI}