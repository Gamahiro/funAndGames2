
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


async function getItemData() {
    const response = await fetch('./player/itemList.json');
    const itemData = await response.json();
    return itemData;
}

export {randomNumber, getItemData}