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
const product_1 = require("../business/entities/product");
const productsGateway = {
    getProducts: jest.fn()
};
describe("Tests for get all products feature", () => {
    it("Should return an empty array", () => __awaiter(void 0, void 0, void 0, function* () {
        productsGateway.getProducts = jest.fn().mockReturnValueOnce([]);
        const getAllProductsUC = new getAllProducts_1.GetAllProductsUC(productsGateway);
        const result = yield getAllProductsUC.execute();
        expect(result).toEqual([]);
        expect(productsGateway.getProducts).toHaveBeenCalled();
    }));
    it("Should return an array with one Product", () => __awaiter(void 0, void 0, void 0, function* () {
        productsGateway.getProducts = jest
            .fn()
            .mockReturnValueOnce([new product_1.Product("123", "banana", 1.5)]);
        const getAllProductsUC = new getAllProducts_1.GetAllProductsUC(productsGateway);
        const result = yield getAllProductsUC.execute();
        expect(result).toEqual([new product_1.Product("123", "banana", 1.5)]);
        expect(productsGateway.getProducts).toHaveBeenCalled();
    }));
});
