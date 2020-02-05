import { Product } from "./product";

export class Purchase {
  constructor(
    private id: string,
    private userId: string,
    private products: PurchaseProduct[]
  ) {}
}

export class PurchaseProduct extends Product {
  constructor(
    id: string,
    name: string,
    price: number,
    private quantity: number
  ) {
    super(id, name, price);
  }
}
