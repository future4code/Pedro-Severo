import { Product } from "../entities/product";

export interface ProductsGateway {
  getProducts(): Promise<Product[]>;
}
