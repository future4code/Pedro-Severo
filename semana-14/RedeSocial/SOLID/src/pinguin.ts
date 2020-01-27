import { Bird } from "./bird";
import { Swimmer } from "./swimmer";

export class Pinguin extends Bird implements Swimmer {
  public currentLocation: number = 0;

  public swim(time: number): void {
    console.log("I'm swimming");
    this.currentLocation += time * 0.5;
  }
}
