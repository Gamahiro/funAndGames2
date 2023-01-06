
function createGameWindow() {
    const gameWindow = document.createElement('div');
    gameWindow.className = 'gameWindow';
    document.querySelector('.content').append(gameWindow);
}

function clearGameWindow() {
    let gameWindow = document.querySelector('.gameWindow');
    while(gameWindow.firstChild) {
        gameWindow.removeChild(gameWindow.firstChild);
    }
}

export {createGameWindow, clearGameWindow}