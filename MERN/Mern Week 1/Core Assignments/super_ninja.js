class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log("Name: "+ this.name +", Health: "+ this.health +", Speed: "+ this.speed +", Strength: "+ this.strength);
        return this;
    }

    showNameClass() {
        console.log("Name of CLASS: "+ this.constructor.name);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}
const danielninja = new Ninja("Daniel");
danielninja.sayName();
danielninja.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 210;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        const drink = super.drinkSake();
        drink;
        console.log("Wisdom: "+ this.wisdom +", 'What one programmer can do in one month, two programmers can do in two months.'")
        return this
    }

    showStatsw() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: "+ this.wisdom);
        return this;
    }
}