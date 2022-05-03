import { Ninja } from "./Ninja.mjs";

export class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.printDivider(` ${this.name.toUpperCase()} SPEAKING WISDOM `)
        super.drinkSake();
        console.log("Wise Message: \"Trying to think of something clever to put here is probably not the wisest use of your time.\"")
    }
}