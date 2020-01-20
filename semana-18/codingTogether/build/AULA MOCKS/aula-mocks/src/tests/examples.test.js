"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMockFunction = jest.fn();
exports.myMockFunctionWithArgs = jest.fn((firstElement, secondElement) => {
    return firstElement * secondElement;
});
const mySecondMockFunction = jest.fn();
const myThirdMockFunction = jest.fn();
class User {
    constructor(name) {
        this.name = name;
    }
}
const goliUser = new User("Goli");
const userGatewayMock = {
    getUsers: jest.fn()
};
describe("Testes gerais de funções", () => {
    it("Teste para verificar se uma função foi chamada", () => {
        exports.myMockFunction();
        expect(exports.myMockFunction).toHaveBeenCalled();
    });
    it("Teste para verificar se uma função foi chamada CORRETAMENTE", () => {
        const result = exports.myMockFunctionWithArgs(1, 2);
        expect(exports.myMockFunctionWithArgs).toHaveBeenCalledWith(1, 2);
        expect(result).toEqual(2);
    });
    it("Teste para verficiar se uma função foi chamada 2 vezes", () => {
        mySecondMockFunction(1, "a", true);
        mySecondMockFunction();
        expect(mySecondMockFunction).toHaveBeenCalledTimes(2);
    });
    it("Teste para verificar o retorno de uma função", () => {
        mySecondMockFunction.mockReturnValue(42);
        const result = mySecondMockFunction();
        expect(result).toEqual(42);
    });
    it("Teste 2 para verificar o retorno de uma função", () => {
        mySecondMockFunction
            .mockReturnValue(true)
            .mockReturnValueOnce(20)
            .mockReturnValueOnce("a");
        const firstResult = mySecondMockFunction();
        const secondResult = mySecondMockFunction();
        expect(firstResult).toEqual(20);
        expect(secondResult).toEqual("a");
        expect(mySecondMockFunction()).toEqual(true);
    });
    it("Teste para verificar se o UserGateway retorna o usuário Goli", () => {
        userGatewayMock.getUsers = jest.fn().mockReturnValue([goliUser]);
        expect(userGatewayMock.getUsers()).toEqual([goliUser]);
    });
});
