
function createGFX() {
    const content = document.querySelector('.content');

    const villageImage = document.createElement('img');
    villageImage.id = 'villageImage';
    villageImage.src = '../assets/images/villagething.png';

    content.append(villageImage);
}

export {createGFX}