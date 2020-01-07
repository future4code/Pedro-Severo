"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Zoo {
    constructor(animalPrinter) {
        this.mammals = [];
        this.birds = [];
        this.animalPrinter = animalPrinter;
    }
    addMammal(mammal) {
        this.mammals.push(mammal);
    }
    getMammalQuantity() {
        return this.mammals.length;
    }
    addBird(bird) {
        this.birds.push(bird);
    }
    getBirdQuantity() {
        return this.birds.length;
    }
    printAllAnimals() {
        for (const bird of this.birds) {
            this.animalPrinter.printAnimal(bird);
        }
        for (const mammal of this.mammals) {
            this.animalPrinter.printAnimal(mammal);
        }
    }
}
exports.Zoo = Zoo;
//# sourceMappingURL=zoo.js.map