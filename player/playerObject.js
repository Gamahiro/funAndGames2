let player = {
    saveData: {
        name: undefined,
        set setName(name) {
            this.name = name;
        },
        get getName() {
            return this.name;
        },
        money: 100,
        get getMoney() {
            return this.money;
        },
        set setMoney(amount) {
            this.money += amount;
        }
    },



}

function setPlayer(newPlayer) {
    player = newPlayer;
    console.log(player);
}




export { player, setPlayer }