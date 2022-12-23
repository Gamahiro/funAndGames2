import { initCraftTab, initResourceTab, initStructuresTab, initTradeTab } from "../controller/controller.js";


function tabSwitch() {
    document.querySelector('#resourcesTab').addEventListener('click', () => {
        initResourceTab();
    });
    document.querySelector('#structuresTab').addEventListener('click', () => {
        initStructuresTab();
    });
    document.querySelector('#craftTab').addEventListener('click', () => {
        initCraftTab();
    });
    document.querySelector('#tradeTab').addEventListener('click', () => {
        initTradeTab();
    })
}

function initEvent() {
    tabSwitch();
}

export { initEvent }