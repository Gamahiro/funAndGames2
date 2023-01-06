

function createCustomerOrderUI() {
    const gameWindow = document.querySelector('.gameWindow');
    
    let orderContainer = document.createElement('div');
    orderContainer.className = 'orderContainer';

    let orderImage = document.createElement('img');
    orderImage.id = 'orderImage';

    let orderText = document.createElement('div');
    orderText.textContent = `Hello, I would like a ...`;

    orderContainer.append(orderImage, orderText);

    gameWindow.append(orderContainer);


}

export {createCustomerOrderUI}