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

    const recruitTab = document.createElement('div');
    recruitTab.className = 'tab';
    recruitTab.id = 'recruitTab';
    recruitTab.textContent = 'Recruit';

    const tabBar = document.createElement('div');
    tabBar.className = 'tabBar';
    tabBar.style.display = 'flex';

    tabBar.append(resourceTab, structuresTab, craftTab, tradeTab, recruitTab);

    const main = document.createElement('div');
    main.className = 'main';

    const welcomeMsg = document.createElement('div');
    welcomeMsg.textContent = 'Welcome to the game!';
    main.append(welcomeMsg);

    const resourceStatusBar = document.createElement('div');
    resourceStatusBar.className = 'resourceStatusBar';
    resourceStatusBar.style.display = 'flex';
    resourceStatusBar.style.justifyContent = 'space-around';

    const goldStatus = document.createElement('span');
    goldStatus.textContent = 'Gold: ';
    goldStatus.id = 'gold';

    const goldIcon = document.createElement('span');
    goldIcon.className = 'material-symbols-outlined';
    goldIcon.textContent = 'monetization_on';

    const goldContainer = document.createElement('div');
    goldContainer.append(goldIcon, goldStatus);



    const houseStatus = document.createElement('span');
    houseStatus.id = 'houses';
    houseStatus.textContent = 'Houses: ';

    const houseIcon = document.createElement('span');
    houseIcon.className = 'material-symbols-outlined';
    houseIcon.textContent = 'cottage';

    const houseContainer = document.createElement('div');
    houseContainer.append(houseIcon, houseStatus)


    const woodStatus = document.createElement('span');
    woodStatus.id = 'woodStatus';
    woodStatus.textContent = 'Wood: ';

    const woodIcon = document.createElement('span');
    woodIcon.className = 'material-symbols-outlined';
    woodIcon.textContent = 'forest';

    const woodContainer = document.createElement('div');
    woodContainer.append(woodIcon, woodStatus)


    const plankStatus = document.createElement('span');
    plankStatus.id = 'plankStatus';
    plankStatus.textContent = 'Planks: ';

    const plankIcon = document.createElement('span');
    plankIcon.className = 'material-symbols-outlined';
    plankIcon.textContent = 'carpenter';

    const plankContainer = document.createElement('div');
    plankContainer.append(plankIcon, plankStatus)

    const metalStatus = document.createElement('span');
    metalStatus.id = 'metalStatus';
    metalStatus.textContent = 'Metal: : ';

    const metalIcon = document.createElement('span');
    metalIcon.className = 'material-symbols-outlined';
    metalIcon.textContent = 'scatter_plot';

    const metalContainer = document.createElement('div');
    metalContainer.append(metalIcon, metalStatus)



    const nailStatus = document.createElement('span');
    nailStatus.id = 'nailStatus';
    nailStatus.textContent = 'Nails: ';

    const nailIcon = document.createElement('span');
    nailIcon.className = 'material-symbols-outlined';
    nailIcon.textContent = 'clear_all';

    const nailContainer = document.createElement('div');
    nailContainer.append(nailIcon, nailStatus)


    resourceStatusBar.append(goldContainer, houseContainer, woodContainer, plankContainer, metalContainer, nailContainer);

    const populationContainer = document.createElement('div');
    populationContainer.className = 'populationContainer';
    
    const forester = document.createElement('div');
    forester.className = 'resource';
    forester.id = 'forester';

    const foresterTitle = document.createElement('div');
    foresterTitle.textContent = 'Forester'

    const foresterIcon = document.createElement('span');
    foresterIcon.className = 'material-symbols-outlined';
    foresterIcon.textContent = 'carpenter';

    const foresterCounter = document.createElement('span');
    foresterCounter.className = 'material-symbols-outlined';
    foresterCounter.textContent = 'engineering';

    const foresterBtn = document.createElement('button');
    foresterBtn.className = 'foresterBtn';
    foresterBtn.textContent = 'Recruit!';

    forester.append(foresterTitle, foresterIcon, foresterCounter, foresterBtn);

    const miner = document.createElement('div');
    miner.className = 'resource';
    miner.id = 'miner';

    const minerTitle = document.createElement('div');
    minerTitle.textContent = 'Miner'

    const minerIcon = document.createElement('span');
    minerIcon.className = 'material-symbols-outlined';
    minerIcon.textContent = 'hardware';

    const minerCounter = document.createElement('span');
    minerCounter.className = 'material-symbols-outlined';
    minerCounter.textContent = 'engineering';

    const minerBtn = document.createElement('button');
    minerBtn.className = 'minerBtn';
    minerBtn.textContent = 'Recruit!';

    miner.append(minerTitle, minerIcon, minerCounter, minerBtn);

    //icon, counter, btn




    populationContainer.append(forester, miner);



    content.append(resourceStatusBar, tabBar, main, populationContainer);

}

export { initDom }