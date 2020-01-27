import { Bird } from "./bird";
import { Flyer } from "./flyer";

export class Parrot extends Bird implements Flyer {
  public currentAltitude: number = 0;

  public speak(): void {
    console.log("ANA MARIA");
  }

  public fly(time: number): void {
    console.log("I'm flying");
    this.currentAltitude += time * 0.5;
  }
}
