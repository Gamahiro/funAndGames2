import { initCraftTab, initResourceTab, initStructuresTab, initTradeTab } from "../controller/controller.js";
import { updateStatusBar } from "../dynamicDOM/updateUI.js";

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

const interval = setInterval(function() {
updateStatusBar();
}, 500);

function initEvent() {
    tabSwitch();
}

export { initEvent }