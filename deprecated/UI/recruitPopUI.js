 
 //for recruiting and overview of population
 function createPopUI() {
    const populationContainer = document.createElement('div');
    populationContainer.className = 'populationContainer';
    
    const forester = document.createElement('div');
    forester.className = 'resource';
    forester.id = 'forester';
   
    const foresterTitle = document.createElement('div');
    foresterTitle.textContent = 'Forester'
   
    const foresterIcon = document.createElement('span');
    foresterIcon.className = 'material-symbols-outlined';
    foresterIcon.textContent = 'carpenter';
   
    const foresterIcon2 = document.createElement('span');
    foresterIcon2.className = 'material-symbols-outlined';
    foresterIcon2.textContent = 'engineering';
   
    const foresterBtn = document.createElement('button');
    foresterBtn.className = 'foresterBtn';
    foresterBtn.textContent = 'Recruit!';
   
    forester.append(foresterTitle, foresterIcon, foresterIcon2, foresterBtn);
   
    const foresterContainer = document.createElement('div');
    foresterContainer.className = 'foresterContainer';
    foresterContainer.style.display = 'flex';

    const foresterCounter = document.createElement('div');
    foresterCounter.id = 'foresterCounter';
    foresterCounter.className = 'counter';


    foresterContainer.append(forester, foresterCounter);

    const miner = document.createElement('div');
    miner.className = 'resource';
    miner.id = 'miner';
   
    const minerTitle = document.createElement('div');
    minerTitle.textContent = 'Miner'
   
    const minerIcon = document.createElement('span');
    minerIcon.className = 'material-symbols-outlined';
    minerIcon.textContent = 'hardware';
   
    const minerIcon2 = document.createElement('span');
    minerIcon2.className = 'material-symbols-outlined';
    minerIcon2.textContent = 'engineering';
   
    const minerBtn = document.createElement('button');
    minerBtn.className = 'minerBtn';
    minerBtn.textContent = 'Recruit!';


   
    miner.append(minerTitle, minerIcon, minerIcon2, minerBtn);
   
   const minerContainer = document.createElement('div');
   minerContainer.className = 'minerContainer';
   minerContainer.style.display = 'flex';

   const minerCounter = document.createElement('div');
   minerCounter.className = 'counter';
   minerCounter.id = 'minerCounter';

   minerContainer.append(miner, minerCounter);

    populationContainer.append(foresterContainer, minerContainer);
    document.querySelector('.content').append(populationContainer);
 }

 function countPops(amount, domCounter) {
   while(domCounter.firstElementChild) domCounter.removeChild(domCounter.firstElementChild);

   for (let index = 0; index < amount; index++) {
      let countElem = document.createElement('span');
      countElem.className = 'material-symbols-outlined';
      countElem.id = 'countElem';
      countElem.textContent = 'person';
      domCounter.append(countElem);
   }

 }


 export {createPopUI, countPops}