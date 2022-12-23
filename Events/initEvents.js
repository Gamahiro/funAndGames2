import { initCraftTab, initResourceTab, initStructuresTab, initTradeTab } from "../controller/controller.js";
import { updateStatusBar } from "../dynamicDOM/updateUI.js";
import { recruitEvent } from "./recruitPop.js";
import { workerIncome } from "../Events/passiveIncome.js";

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

const incomeInterval = setInterval(function() {
    workerIncome();
}, 2000);

function initEvent() {
    recruitEvent();
    tabSwitch();
}

export { initEvent }