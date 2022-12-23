import { createTradeUI } from "../dynamicDOM/createTradeUI.js";
import { tradeEvent } from "../Events/itemTrade.js";

import { createResourceCollectUI } from "../dynamicDOM/createResourceUI.js";
import { resourceEvent } from "../Events/createResource.js";

import { createStructuresBuildUI } from "../dynamicDOM/buildStructureUI.js";
import { buildHouse } from "../Events/buildStructure.js";

import { createCraftUI } from "../dynamicDOM/createCraftUI.js";
import { craftEvent } from "../Events/craft.js";


function initResourceTab() {
    createResourceCollectUI();
    resourceEvent();
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