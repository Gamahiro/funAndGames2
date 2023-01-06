function createResourceBar() {
    const resourceStatusBar = document.createElement('div');
    resourceStatusBar.className = 'resourceStatusBar';
    
    const moneyName = document.createElement('span');
    moneyName.textContent = 'Money: ';

    const moneyAmount = document.createElement('span');
    moneyAmount.textContent = 0;
    moneyAmount.id = 'money';
    
    const moneyIcon = document.createElement('span');
    moneyIcon.className = 'material-symbols-outlined';
    moneyIcon.textContent = 'monetization_on';
    
    const moneyContainer = document.createElement('div');
    moneyContainer.append(moneyIcon, moneyName, moneyAmount);

    resourceStatusBar.append(moneyContainer);
    
    document.querySelector('.content').append(resourceStatusBar);
}

export { createResourceBar}