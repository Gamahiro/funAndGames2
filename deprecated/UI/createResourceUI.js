import { updateResources } from "./updateUI.js";

function createResourceCollectUI() {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    const resourceTitle = document.createElement('div');
    resourceTitle.className = 'menuTitle';
    resourceTitle.textContent = 'Resources:';
    
    const woodResource = document.createElement('div');
    woodResource.className = 'resource';
    woodResource.id = 'wood';
    woodResource.textContent = 'Wood: ';

    const plankResource = document.createElement('div');
    plankResource.className = 'resource';
    plankResource.id = 'plank';
    plankResource.textContent = 'Planks: ';

    const metalResource = document.createElement('div');
    metalResource.className = 'resource';
    metalResource.id = 'metal';
    metalResource.textContent = 'Metal: ';

    const nailsResource = document.createElement('div');
    nailsResource.className = 'resource';
    nailsResource.id = 'nail';
    nailsResource.textContent = 'Nails: ';

    const collectBtn = document.createElement('button');
    collectBtn.className = 'collectBtn';
    collectBtn.textContent = 'Collect!';

    document.querySelector('.main').append(resourceTitle, woodResource, plankResource, metalResource, nailsResource, collectBtn);
    updateResources();
}

export{createResourceCollectUI}