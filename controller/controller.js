import { createResourceCollectUI, createStructuresBuildUI, createCraftUI, createTradeUI } from "../dynamicDOM/updateUI.js";
import { collectEvent } from "../Events/collectEvent.js";
import { buildHouse } from "../Events/buildStructure.js";
import { craftEvent } from "../Events/craft.js";
import { tradeEvent } from "../Events/itemTrade.js";

function initResourceTab() {
    createResourceCollectUI();
    collectEvent();
}

function initStructuresTab() {
    createStructuresBuildUI();
    buildHouse();
}

function initCraftTab() {
    createCraftUI();
    craftEvent();
}

function initTradeTab() {
    createTradeUI();
    tradeEvent();
}

export {initResourceTab, initStructuresTab, initCraftTab, initTradeTab}