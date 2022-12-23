function initDom() {

    const content = document.createElement('div');
    content.className = 'content';
    
    document.body.appendChild(content);

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

    const tabBar = document.createElement('div');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';

    tabBar.append(resourceTab, structuresTab, craftTab, tradeTab);

    const main = document.createElement('div');
    main.className = 'main';

    const welcomeMsg = document.createElement('div');
    welcomeMsg.textContent = 'Welcome to the game!';
    main.append(welcomeMsg);

    const resourceStatusBar = document.createElement('div');
    resourceStatusBar.style.display = 'flex';
    resourceStatusBar.style.justifyContent = 'space-around';

    const goldStatus = document.createElement('div');
    goldStatus.textContent = 'Gold: ';
    goldStatus.id = 'gold';

    const houseStatus = document.createElement('div');
    houseStatus.id = 'houses';
    houseStatus.textContent = 'Houses: ';

    const woodStatus = document.createElement('div');
    woodStatus.id = 'woodStatus';
    woodStatus.textContent = 'Wood: ';

    const plankStatus = document.createElement('div');
    plankStatus.id = 'plankStatus';
    plankStatus.textContent = 'Planks: ';

    const metalStatus = document.createElement('div');
    metalStatus.id = 'metalStatus';
    metalStatus.textContent = 'Metal: : ';

    const nailStatus = document.createElement('div');
    nailStatus.id = 'nailStatus';
    nailStatus.textContent = 'Nails: ';

    

    resourceStatusBar.append(goldStatus, houseStatus, woodStatus, plankStatus, metalStatus, nailStatus);

    content.append(resourceStatusBar, tabBar, main);

}

export {initDom}