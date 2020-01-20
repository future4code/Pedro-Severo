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
const invalidArgument_1 = require("../business/entities/errors/invalidArgument");
const User_1 = require("../business/entities/User");
const insuficientBalance_1 = require("../business/entities/errors/insuficientBalance");
const getUserGatewayMock = {
    execute: jest.fn().mockReturnValue(new User_1.User("123", 5))
};
const makePurchaseGatewayMock = {
    execute: jest.fn()
};
const buildMakePurchaseUC = () => {
    return new makePurchase_1.MakePurchaseUC(makePurchaseGatewayMock, getUserGatewayMock);
};
describe("Testando o caso de uso de fazer uma compra", () => {
    it("Deveria retornar um erro específico se o id do usuário estiver faltando", () => {
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "",
            products: [
                {
                    id: "123",
                    name: "caneta",
                    price: 2,
                    quantity: 3
                }
            ]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new invalidArgument_1.InvalidArgumentError());
    });
    it("Deveria retornar um erro específico se o array de produtos for vazio", () => {
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "123",
            products: []
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new invalidArgument_1.InvalidArgumentError("Você tem que informar os produtos"));
    });
    it("Deveria retornar um erro específico se estiver faltando a quantidade de algum produto", () => {
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "123",
            products: [
                {
                    id: "123",
                    name: "caneta",
                    price: 2,
                    quantity: -1
                }
            ]
        };
        //ToDO: fazer os outros testes
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new invalidArgument_1.InvalidArgumentError("Dê todas as informações de todos os produtos"));
    });
    it("Deveria retornar um erro específico se o usuário não tiver saldo o suficiente para a compra", () => {
        getUserGatewayMock.execute = jest.fn().mockReturnValue(new User_1.User("123", 5));
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "123",
            products: [
                {
                    id: "123",
                    name: "caneta",
                    price: 2,
                    quantity: 3
                }
            ]
        };
        expect(makePurchaseUC.execute(input)).rejects.toThrow(new insuficientBalance_1.InsufficientBalance());
    });
    it("Deveria retornar a mensagem de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        getUserGatewayMock.execute = jest.fn().mockReturnValue(new User_1.User("123", 10));
        const makePurchaseUC = buildMakePurchaseUC();
        const input = {
            userId: "123",
            products: [
                {
                    id: "123",
                    name: "caneta",
                    price: 2,
                    quantity: 3
                }
            ]
        };
        const result = yield makePurchaseUC.execute(input);
        expect(result).toEqual("Compra processada com sucesso. O total foi: R$6,00");
    }));
});
