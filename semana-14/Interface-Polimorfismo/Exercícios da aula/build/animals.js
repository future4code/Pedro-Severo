class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('BARULHO');
    }
}
class Dog extends Animal {
    giveBirth(name) {
        setTimeout(() => new Dog(name), this.gestationPeriod);
    }
    makeSound() {
        console.log('Au au');
    }
}
class Owl extends Animal {
    makeSound() {
        console.log('Hu hu 🦉');
    }
    fly() {
        this.altitude += 100;
    }
}
class Bat extends Animal {
    makeSound() {
        console.log('Hu hu 🦉');
    }
    fly() {
        this.altitude += 50;
    }
    giveBirth(name) {
        setTimeout(() => new Bat(name), this.gestationPeriod);
    }
}
class Zoo {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    addBird(bird) {
        this.viveiro.push(bird);
    }
    pokeAnimals() {
        this.animals.forEach(animal => {
            animal.makeSound();
        });
    }
}
const zoo = new Zoo();
const astrodog = new Dog('Astrodog');
const edwiges = new Owl('Edwiges');
const tom = new Animal('Tom');
zoo.addAnimal(astrodog);
zoo.addAnimal(edwiges);
zoo.addAnimal(tom);
zoo.pokeAnimals();
//# sourceMappingURL=animals.js.map