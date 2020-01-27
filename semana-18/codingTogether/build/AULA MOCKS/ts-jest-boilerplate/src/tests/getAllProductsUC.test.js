"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllProducts_1 = require("../business/usecases/getAllProducts");
const Product_1 = require("../business/entities/Product");
const getAllProductsGatewayMock = {
    execute: jest.fn()
};
const buildProductsUC = () => {
    return new getAllProducts_1.GetAllProductsUC(getAllProductsGatewayMock);
};
describe("Testando o caso de uso de pegar todos os produtos", () => {
    it("Deveria retornar um array vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        getAllProductsGatewayMock.execute = jest.fn().mockReturnValue([]);
        const result = yield buildProductsUC().execute();
        expect(result).toEqual({
            products: []
        });
    }));
    it("Deveria retornar um array com um produto", () => __awaiter(void 0, void 0, void 0, function* () {
        getAllProductsGatewayMock.execute = jest
            .fn()
            .mockReturnValue([new Product_1.Product("123", "caneta", 2)]);
        const result = yield buildProductsUC().execute();
        expect(result).toEqual({
            products: [
                {
                    id: "123",
                    name: "caneta",
                    price: 2
                }
            ]
        });
    }));
});
