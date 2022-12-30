const player = {
        saveData: {
            name: undefined,
            set setName(name) {
                this.name = name; 
            },
            get getName() {
                return this.name;
            },
            difficulty: undefined,
            set setDifficulty(amount) {
                this.difficulty = amount;
            },
            get getDifficulty() {
                return this.difficulty;
            },
            date: undefined,
            set setDate(date) {
                this.date = date;
            },
            get getDate() {
                return this.date;
            },
            playTime: undefined,
            set setPlayTime(time) {
                playTime = time;
            },
            get getPlayTime() {
                return this.playTime;
            }
        },
        truck: undefined,
        set setTruck(truckObj) {
            this.truck = truckObj;
        },
        get getTruck() {
            return this.truck;
        },
        inventory: [],
        set setInventory (item) {
            this.inventory.push(item);
        } ,
        get getInventory() {
            return this.inventory;
        },
        money: 100,
        get getMoney() {
            return this.money;
        },
        set setMoney(amount) {
            this.money += amount;
        }
        

}






export {player}