//for overview of resources
function createResourceBar() {
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
    
    document.querySelector('.content').append(resourceStatusBar);
}

export { createResourceBar}