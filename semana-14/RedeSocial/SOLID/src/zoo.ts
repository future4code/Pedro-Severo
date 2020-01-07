import { Mammal } from "./mammal";
import { Bird } from "./bird";
import { SimplePrinter, AnimalPrinter } from "./simplePrinter";

export class Zoo {
  private mammals: Mammal[] = [];
  private birds: Bird[] = [];
  private animalPrinter: AnimalPrinter;

  constructor(animalPrinter: AnimalPrinter) {
    this.animalPrinter = animalPrinter;
  }

  public addMammal(mammal: Mammal): void {
    this.mammals.push(mammal);
  }

  public getMammalQuantity(): number {
    return this.mammals.length;
  }

  public addBird(bird: Bird): void {
    this.birds.push(bird);
  }

  public getBirdQuantity(): number {
    return this.birds.length;
  }

  public printAllAnimals() {
    for (const bird of this.birds) {
      this.animalPrinter.printAnimal(bird);
    }

    for (const mammal of this.mammals) {
      this.animalPrinter.printAnimal(mammal);
    }
  }
}
