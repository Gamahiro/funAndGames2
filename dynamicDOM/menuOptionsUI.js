
function createMenuOptions() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const menuTitle = document.createElement('div');
    menuTitle.className = 'menuTitle';
    menuTitle.textContent = 'Menu';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'menuBtn';
    saveBtn.id = 'saveBtn';
    saveBtn.textContent = 'Save';

    const loadBtn = document.createElement('button');
    loadBtn.className = 'menuBtn';
    loadBtn.id = 'loadBtn';
    loadBtn.textContent = 'Load';

    main.append(menuTitle, saveBtn, loadBtn);
}

export {createMenuOptions}