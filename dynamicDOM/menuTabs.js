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

    /* const craftTab = document.createElement('div');
    craftTab.className = 'tab';
    craftTab.id = 'craftTab';
    craftTab.textContent = 'Craft';

    const recruitTab = document.createElement('div');
    recruitTab.className = 'tab';
    recruitTab.id = 'recruitTab';
    recruitTab.textContent = 'Recruit';  */

    const menuTab = document.createElement('div');
    menuTab.className = 'tab';
    menuTab.id = 'menuTab';
    menuTab.textContent = 'Menu';

    const tabBar = document.createElement('nav');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';


    tabBar.append(sellMealsTab, ingredientShopTab, truckShopTab, menuTab);

    document.querySelector('.content').append(tabBar);


}

export {createMenuTabs}