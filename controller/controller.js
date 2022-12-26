import { createTradeUI } from "../dynamicDOM/createTradeUI.js";
import { tradeEvent } from "../Events/itemTrade.js";

import { createResourceCollectUI } from "../dynamicDOM/createResourceUI.js";
import { resourceEvent } from "../Events/createResource.js";

import { createStructuresBuildUI } from "../dynamicDOM/buildStructureUI.js";
import { buildHouse } from "../Events/buildStructure.js";

import { createCraftUI } from "../dynamicDOM/createCraftUI.js";
import { craftEvent } from "../Events/craft.js";

import { createPopUI } from "../dynamicDOM/recruitPopUI.js";
import { recruitEvent } from "../Events/recruitPop.js";

import {createMenuOptions} from "../dynamicDOM/menuOptionsUI.js";
import { saveLoadGame } from "../Events/saveLoadEvent.js";

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

function recruitEventTab() {
    recruitEvent();
}

function initMenuTab() {
    createMenuOptions();
    saveLoadGame();
}


export {initResourceTab, initStructuresTab, initCraftTab, initTradeTab, recruitEventTab, initMenuTab}