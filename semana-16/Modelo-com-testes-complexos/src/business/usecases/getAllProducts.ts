import { ProductsGateway } from "../gateways/productsGateway";
import { Product } from "../entities/product";

export class GetAllProductsUC {
  constructor(private productsGateway: ProductsGateway) {}

  async execute(): Promise<Product[]> {
    return this.productsGateway.getProducts();
  }
}
