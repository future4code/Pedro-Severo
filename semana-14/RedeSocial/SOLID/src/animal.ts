import { Bird } from "./bird";

export abstract class Animal {
  // constructor(public name: string) {}
  constructor(protected name: string) {}

  public getName(): string {
    return this.name;
  }
}
