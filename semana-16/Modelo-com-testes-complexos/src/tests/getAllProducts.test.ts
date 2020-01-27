import { ProductsGateway } from "../business/gateways/productsGateway";
import { GetAllProductsUC } from "../business/usecases/getAllProducts";
import { Product } from "../business/entities/product";

const productsGateway: ProductsGateway = {
  getProducts: jest.fn()
};

describe("Tests for get all products feature", () => {
  it("Should return an empty array", async () => {
    productsGateway.getProducts = jest.fn().mockReturnValueOnce([]);
    const getAllProductsUC = new GetAllProductsUC(productsGateway);
    const result = await getAllProductsUC.execute();
    expect(result).toEqual([]);
    expect(productsGateway.getProducts).toHaveBeenCalled();
  });

  it("Should return an array with one Product", async () => {
    productsGateway.getProducts = jest
      .fn()
      .mockReturnValueOnce([new Product("123", "banana", 1.5)]);
    const getAllProductsUC = new GetAllProductsUC(productsGateway);
    const result = await getAllProductsUC.execute();
    expect(result).toEqual([new Product("123", "banana", 1.5)]);
    expect(productsGateway.getProducts).toHaveBeenCalled();
  });
});
