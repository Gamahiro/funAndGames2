
function createMenuOptions() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const menuTitle = document.createElement('div');
    menuTitle.className = 'menuTitle';
    menuTitle.textContent = 'Menu';

    const saveBtn = document.createElement('button');
    saveBtn.id = 'saveBtn';
    saveBtn.textContent = 'Save';

    const saveInput = document.createElement('input');
    saveInput.className = 'menuBtn';
    saveInput.id = 'saveInput';

    const loadBtn = document.createElement('button');
    loadBtn.className = 'menuBtn';
    loadBtn.id = 'loadBtn';
    loadBtn.textContent = 'Load';
    createLoadMenu();

    main.append(menuTitle, saveInput, saveBtn, loadBtn);
}

function createLoadMenu() {
    const main = document.querySelector('.main');
    let saveFiles = localStorage;


    const loadContainer = document.createElement('div');

    for (let [key, value] of Object.entries(saveFiles)) {
        if(key !== 'debug') { 
        console.log(key);
        const loadNameOption = document.createElement('div');
        loadNameOption.textContent = `${key}`;
        loadContainer.append(loadNameOption);
    }
    }
    main.append(loadContainer);
    

}


export {createMenuOptions}