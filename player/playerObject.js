const player = {
        saveData: {
            name: undefined,
            set name(name) {
                this.name = name; 
            },
            get name() {
                return this.name;
            },
            difficulty: undefined,
            set difficulty(amount) {
                this.difficulty = amount;
            },
            get difficulty() {
                return this.difficulty;
            },
            date: undefined,
            set date(date) {
                this.date = date;
            },
            get date() {
                return this.date;
            },
            playTime: undefined,
            set playTime(time) {
                playTime = time;
            },
            get playTime() {
                return this.playTime;
            }
        },
        truck: undefined,
        set truck(truckObj) {
            this.truck = truckObj;
        },
        get truck() {
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