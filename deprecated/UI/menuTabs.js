function createMenuTabs() {
    const resourceTab = document.createElement('div');
    resourceTab.className = 'tab';
    resourceTab.id = 'resourcesTab';
    resourceTab.textContent = 'Resources';

    const structuresTab = document.createElement('div');
    structuresTab.className = 'tab';
    structuresTab.id = 'structuresTab';
    structuresTab.textContent = 'Structures';

    const tradeTab = document.createElement('div');
    tradeTab.className = 'tab';
    tradeTab.id = 'tradeTab';
    tradeTab.textContent = 'Trade';

    const craftTab = document.createElement('div');
    craftTab.className = 'tab';
    craftTab.id = 'craftTab';
    craftTab.textContent = 'Craft';

   /*  const recruitTab = document.createElement('div');
    recruitTab.className = 'tab';
    recruitTab.id = 'recruitTab';
    recruitTab.textContent = 'Recruit'; */

    const menuTab = document.createElement('div');
    menuTab.className = 'tab';
    menuTab.id = 'menuTab';
    menuTab.textContent = 'Menu';

    const tabBar = document.createElement('div');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';


    tabBar.append(resourceTab, structuresTab, craftTab, tradeTab, menuTab);

    document.querySelector('.content').append(tabBar);


}

export {createMenuTabs}