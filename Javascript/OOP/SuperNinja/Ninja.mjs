export class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        this.printDivider(` PRINTING ${(this.name.toUpperCase())}'S INFO `);
        this.sayName();
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake() {
        this.printDivider(" DRINKING SAKE ");
        this.health += 10;
        console.log(`Health increased by 10, new health: ${this.health}`);
    }

    printDivider(message) {
        if (message === undefined) { message = ""; }
        console.log(`**************${message}**************`);
    }
}