import { updateItems } from "./updateUI.js";

function createTradeUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const tradeTitle = document.createElement('div');
    tradeTitle.className = 'menuTitle';
    tradeTitle.textContent = 'Trading';

    const item1 = document.createElement('div');
    item1.style.display = 'flex';
    item1.style.justifyContent = 'space-between';

    const arrow = document.createElement('div');
    arrow.className = 'resource';
    arrow.id = 'arrow';
    arrow.textContent = 'Arrows: ';

    const arrowSellBtn = document.createElement('button');
    arrowSellBtn.className = 'arrowSell';
    arrowSellBtn.textContent = 'Sell 1';

    item1.append(arrow, arrowSellBtn);

    const item2 = document.createElement('div');
    item2.style.display = 'flex';
    item2.style.justifyContent = 'space-between';

    const chair = document.createElement('div');
    chair.className = 'resource';
    chair.id = 'chair';
    chair.textContent = 'Chairs: ';

    const chairSellBtn = document.createElement('button');
    chairSellBtn.className = 'chairSell';
    chairSellBtn.textContent = 'Sell 1';

    item2.append(chair, chairSellBtn);

    const sellBtn = document.createElement('button');
    sellBtn.className = 'sellBtn';
    sellBtn.textContent = 'Sell';

    main.append(tradeTitle, item1, item2, sellBtn);

    /* player.items.tradeitems.forEach(element => {
        let item = document.createElement('div');
        item.className = 'resource';
        item.id = `${element.name}`;
        item.textContent = `${element.name}: ${element}`;
    }) */
    updateItems();
}
export {createTradeUI}