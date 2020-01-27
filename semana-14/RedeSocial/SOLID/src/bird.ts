import { Animal } from "./animal";

export abstract class Bird extends Animal {
  public layEgg(): void {
    console.log("O ovo está ninho");
  }
}
