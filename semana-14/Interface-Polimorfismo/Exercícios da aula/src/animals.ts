class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    makeSound(): void {
        console.log('BARULHO')
    }
}

interface Bird extends Animal {
    altitude: number

    fly(): void
}

interface Mammal extends Animal {
    gestationPeriod: number

    giveBirth(name: string): void
}

class Dog extends Animal implements Mammal {
    gestationPeriod: number
    name: string

    giveBirth(name: string) {
        setTimeout(() => new Dog(name), this.gestationPeriod)
    }

    makeSound(): void {
        console.log('Au au')
    }
}

class Owl extends Animal implements Bird {
    altitude: number;

    makeSound(): void {
        console.log('Hu hu 🦉')
    }

    fly(): void {
        this.altitude += 100
    }
}

class Bat extends Animal implements Bird, Mammal {
    altitude: number;
    gestationPeriod: number;

    makeSound(): void {
        console.log('Hu hu 🦉')
    }

    fly(): void {
        this.altitude += 50
    }

    giveBirth(name: string): void {
        setTimeout(() => new Bat(name), this.gestationPeriod)
    }
}

class Zoo {
    animals: Animal[]
    viveiro: Bird[]

    constructor() {
        this.animals = []
    }

    addAnimal(animal: Animal) {
        this.animals.push(animal)
    }

    addBird(bird: Bird) {
        this.viveiro.push(bird)
    }

    pokeAnimals() {
        this.animals.forEach(animal => {
            animal.makeSound()
        })
    }
}

const zoo = new Zoo()

const astrodog = new Dog('Astrodog')
const edwiges = new Owl('Edwiges')
const tom = new Animal('Tom')

zoo.addAnimal(astrodog)
zoo.addAnimal(edwiges)
zoo.addAnimal(tom)

zoo.pokeAnimals() // Output: "Au au", "Hu hu", "BARULHO"