function createMenuTabs() {
    const sellMealsTab = document.createElement('button');
    sellMealsTab.className = 'tab';
    sellMealsTab.id = 'sellMealsTab';
    sellMealsTab.textContent = 'Sell Meals';

    const ingredientShopTab = document.createElement('div');
    ingredientShopTab.className = 'tab';
    ingredientShopTab.id = 'ingredientShopTab';
    ingredientShopTab.textContent = 'Ingredient Shop';

    const truckShopTab = document.createElement('div');
    truckShopTab.className = 'tab';
    truckShopTab.id = 'truckShopTab';
    truckShopTab.textContent = 'Truck Shop';

    const saveGame = document.createElement('div');
    saveGame.className = 'tab';
    saveGame.id = 'saveGame';
    saveGame.textContent = 'Save';

    const loadGame = document.createElement('div');
    loadGame.className = 'tab';
    loadGame.id = 'loadGame';
    loadGame.textContent = 'Load'; 

    const profileTab = document.createElement('div');
    profileTab.className = 'tab';
    profileTab.id = 'profileTab';
    profileTab.textContent = 'Profile';

    const delSaveTab = document.createElement('div');
    delSaveTab.className = 'tab';
    delSaveTab.id = 'delSaveTab';
    delSaveTab.textContent = 'Delete Savedata';
    delSaveTab.style.backgroundColor = 'red';
    delSaveTab.style.color = 'white';

    const tabBar = document.createElement('nav');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';

    


    tabBar.append(sellMealsTab, ingredientShopTab, truckShopTab, profileTab, saveGame, loadGame, delSaveTab);

    document.querySelector('.content').append(tabBar);


}

export {createMenuTabs}