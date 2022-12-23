 
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
   
    const foresterCounter = document.createElement('span');
    foresterCounter.className = 'material-symbols-outlined';
    foresterCounter.textContent = 'engineering';
   
    const foresterBtn = document.createElement('button');
    foresterBtn.className = 'foresterBtn';
    foresterBtn.textContent = 'Recruit!';
   
    forester.append(foresterTitle, foresterIcon, foresterCounter, foresterBtn);
   
    const miner = document.createElement('div');
    miner.className = 'resource';
    miner.id = 'miner';
   
    const minerTitle = document.createElement('div');
    minerTitle.textContent = 'Miner'
   
    const minerIcon = document.createElement('span');
    minerIcon.className = 'material-symbols-outlined';
    minerIcon.textContent = 'hardware';
   
    const minerCounter = document.createElement('span');
    minerCounter.className = 'material-symbols-outlined';
    minerCounter.textContent = 'engineering';
   
    const minerBtn = document.createElement('button');
    minerBtn.className = 'minerBtn';
    minerBtn.textContent = 'Recruit!';
   
    miner.append(minerTitle, minerIcon, minerCounter, minerBtn);
   
    populationContainer.append(forester, miner);
    document.querySelector('.content').append(populationContainer);
 }

 export {createPopUI}