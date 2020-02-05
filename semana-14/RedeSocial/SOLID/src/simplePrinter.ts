import { Animal } from "./animal";
import { Bird } from "./bird";
import { Mammal } from "./mammal";

export interface AnimalPrinter {
  printAnimal(animal: Animal): void;
}

export class SimplePrinter implements AnimalPrinter {
  public printAnimal(animal: Animal): void {
    let message: string = "";
    if (animal instanceof Bird) {
      message += "Ave - ";
    } else if (animal instanceof Mammal) {
      message += "Mamífero - ";
    }
    message += animal.getName().toUpperCase();
    console.log(message);
  }
}

export class ColourPrinter implements AnimalPrinter {
  public printAnimal(animal: Animal): void {
    let message: string = "";
    if (animal instanceof Bird) {
      message += "Ave - ";
    } else if (animal instanceof Mammal) {
      message += "Mamífero - ";
    }
    message += animal.getName();

    console.log("\x1b[36m%s", message, "\x1b[0m");
  }
}
