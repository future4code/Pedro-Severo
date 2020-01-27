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
const makePurchase_1 = require("../business/usecases/makePurchase");
const missingInformationError_1 = require("../business/entities/erros/missingInformationError");
const invalidBalance_1 = require("../business/entities/erros/invalidBalance");
const user_1 = require("../business/entities/user");
const userGatewayMock = {
    getUser: jest.fn()
};
const purchaseGateway = {
    makePurchase: jest.fn()
};
const buildMakePurchaseUC = () => {
    return new makePurchase_1.MakePurchaseUC(userGatewayMock, purchaseGateway);
};
describe("Testing Make Purchase Use Case", () => {
    it("Should throw an error if userId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const productInput = {
            id: "123",
            name: "leite",
            price: 5.5,
            quantity: 3
        };
        const input = {
            userId: "",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if products are empty", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "123",
            products: []
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if quantity is in wrong format", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const productInput = {
            id: "123",
            name: "leite",
            price: 5.5,
            quantity: -1
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if id is missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const productInput = {
            id: "",
            name: "leite",
            price: 5.5,
            quantity: 120
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if name is missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const productInput = {
            id: "123",
            name: "",
            price: 5.5,
            quantity: 120
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if price is in wrong format", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        const productInput = {
            id: "123",
            name: "leite",
            price: -1,
            quantity: 120
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new missingInformationError_1.MissingInformationError());
    }));
    it("Should throw an error if total amount is bigger than user's balance", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        userGatewayMock.getUser = jest
            .fn()
            .mockReturnValueOnce(new user_1.User("123", "Goli", 10));
        const productInput = {
            id: "123",
            name: "leite",
            price: 12,
            quantity: 2
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new invalidBalance_1.InvalidBalanceError());
        expect(purchaseGateway.makePurchase).toHaveBeenCalledTimes(0);
    }));
    it("Should create a purchase and return a success message", () => __awaiter(void 0, void 0, void 0, function* () {
        const makePurchaseUC = buildMakePurchaseUC();
        userGatewayMock.getUser = jest
            .fn()
            .mockReturnValueOnce(new user_1.User("123", "Goli", 100));
        const productInput = {
            id: "123",
            name: "leite",
            price: 12,
            quantity: 2
        };
        const input = {
            userId: "123",
            products: [productInput]
        };
        const result = yield makePurchaseUC.execute(input);
        expect(result).toEqual("Purchase created successfully! Total amount: R$24,00");
        expect(purchaseGateway.makePurchase).toHaveBeenCalled();
    }));
});
