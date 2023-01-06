function newPlayerUI() {

const main = document.querySelector('main');
    const gameWindow = document.querySelector('.gameWindow');

    let nameForm = document.createElement('form');
    nameForm.className = 'nameForm';

    let nameContainer = document.createElement('div');

    let nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Welcome to the food truck business! What`s your name?';
    
    let nameInput = document.createElement('input');
    nameInput.type = 'input';
    nameInput.name = 'name';
    nameInput.id = 'nameInput';
    
    let submitBtn = document.createElement('button');
    submitBtn.id = 'submitNameBtn';
    submitBtn.textContent = 'OK';

    nameContainer.append(nameLabel, nameInput, submitBtn);
    nameForm.append(nameContainer);
    gameWindow.append(nameForm);
    }

    export {newPlayerUI}