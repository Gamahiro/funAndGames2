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

    const profileTab = document.createElement('div');
    profileTab.className = 'tab';
    profileTab.id = 'profileTab';
    profileTab.textContent = 'Profile';

    const tabBar = document.createElement('nav');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';


    tabBar.append(sellMealsTab, ingredientShopTab, truckShopTab, profileTab);

    document.querySelector('.content').append(tabBar);


}

export {createMenuTabs}