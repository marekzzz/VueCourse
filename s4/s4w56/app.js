new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods:{
        startGame : function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift( {
                isPlayer: true,
                text: 'Player hit Monster for' + damage
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(10,20);
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function () {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp : function () {
            this.gameIsRunning = false;
        },
        calculateDamage : function (min, max) {
            var damage = Math.max( Math.floor( Math.random() * max) + 1, min);
            return damage;
        },
        checkWin: function () {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack : function () {
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage
            this.turns.unshift( {
                isPlayer: false,
                text: 'Monster hit Player for' + damage
            })
            this.checkWin();
        }
    }
});