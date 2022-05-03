class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    /**
     * Attacking another Unit object
     * 
     * @param {Unit} target The target Unit
     */
    attack(target) {
        console.log(`${this.name} attacking ${target.name}...`)
        target.resilience -= this.power;

        console.log(`${this.power} damage dealt`);
        console.log(`${target.name}'s new resilience: ${target.resilience}`);
    }
}

class Effect extends Card {
    /**
     * @param {String} name The name of the effect
     * @param {Number} cost The cost of obtaining the card
     * @param {String} stat Which statistic, power or resilience, is affected
     * @param {Number} magnitude The amount that the card increases or
     *     decreases the target's stat
     */
    constructor(name, cost, stat, magnitude) {
        super(name, cost);

        if (stat !== "resilience" && stat !== "power") {
            throw new Error("Stat must either be \"resilience\" or \"power\"");
        }
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = ((magnitude > 0) ? "Raises" : "Lowers")
            + " the target's "
            + stat
            + " by "
            + String.toString(magnitude);
        this.magnitudeString = (this.magnitude < 0 ? "" : "+") + this.magnitude.toString()
    }

    /**
     * 
     * @param {Unit} target The unit to be affected by the card
     */
    play(target) {
        if (!(target instanceof Unit)) {
            throw new Error("Target must be of type Unit");
        }

        console.log(`${this.name} played on ${target.name}`);

        switch (this.stat) {
            case "resilience":
                target.resilience += this.magnitude;
                console.log(`${target.name} resilience ${this.magnitudeString}`)
                console.log(`${target.name}'s new resilience: ${target.resilience}`);
                break;
            case "power":
                target.power += this.magnitude;
                console.log(`${target.name} power ${this.magnitudeString}`)
                console.log(`${target.name}'s new power: ${target.power}`);
                break;
        }
    }
}

function printDivider(message = "") {
    console.log("\n****************", message, "****************\n");
}

// Turn 1
printDivider("TURN 1");

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
hardAlgorithm.play(redBeltNinja);

// Turn 2
printDivider("TURN 2");
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);

unhandledPromiseRejection.play(redBeltNinja);

// Turn 3
printDivider("TURN 3");
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);