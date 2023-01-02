
function createGameWindow() {
    const gameWindow = document.createElement('div');
    gameWindow.className = 'gameWindow';
    document.querySelector('main').append(gameWindow);
}

export {createGameWindow}