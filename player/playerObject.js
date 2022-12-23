

const player = {
    resource: {
        rawResource: {
            wood: 0,
            set setWood(amount) {
                this.wood += amount;
            },
            get getWood() {
                return this.wood;
            },
            metal: 0,
            set setMetal(amount) {
                this.metal += amount;
            },
            get getMetal() {
                return this.metal;
            }
        },
        refinedResource: {
            plank: 0,
            set setPlank(amount) {
                this.plank += amount;
            },
            get getPlank() {
                return this.plank;
            },
            nails: 0,
            set setNails(amount) {
                this.nails += amount;
            },
            get getNails() {
                return this.nails;
            }
        },
        currency: {
            gold: 0,
            get getGold(){
                return this.gold;
            },
            set setGold(amount) {
                this.gold += amount;
            }
        }
    },
    structures: {
        house: 0,
        set setHouse(amount) {
            this.house += amount;
        },
        get getHouse() {
            return this.house;
        }
    },
    items: {
        tradeitems: {
            arrow: 0,
            get getArrow() {
                return this.arrow;
            },
            set setArrow(amount) {
                this.arrow += amount;
            },
            chair: 0,
            get getChair() {
                return this.chair;
            },
            set setChair(amount) {
                this.chair += amount;
            }
        }
    }
}

export {player}