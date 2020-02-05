import { Animal } from "./animal";

export abstract class Mammal extends Animal {
  // meters
  protected currentLocation: number;

  public run(time: number): void {
    console.log("I'm running ");
    this.currentLocation += time * 0.6;
  }

  public getCurrentLocation(): number {
    return this.currentLocation;
  }
}
