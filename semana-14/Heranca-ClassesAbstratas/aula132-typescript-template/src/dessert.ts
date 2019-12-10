import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  public slicePrice: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number,
  ) {
    super(name, price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  };

  public getTotalPrice(): number {
    return this.price * this.slicesNumber;
  };

  public cook(): void {
    console.log("Baking Dessert");
  };
};