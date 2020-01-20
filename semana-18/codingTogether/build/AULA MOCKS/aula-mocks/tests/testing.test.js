"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMockFuncion = jest.fn();
describe("General tests", () => {
    it("Testing myMockFunction", () => {
        exports.myMockFuncion();
        expect(exports.myMockFuncion).toHaveBeenCalled();
    });
});
exports.myMockFunctionWithArgs = jest.fn((firstElement, secondElement) => {
    return firstElement * secondElement;
});
describe("General tests", () => {
    it("Testing myMockFunctionWithArgs", () => {
        exports.myMockFunctionWithArgs(10, 20);
        expect(exports.myMockFunctionWithArgs).toHaveBeenCalledWith(10, 20);
    });
});
const mySecondMockFunction = jest.fn();
describe("General tests", () => {
    it("Testing myMockFunctionWithArgs", () => {
        mySecondMockFunction(1, "a", true);
        mySecondMockFunction();
        console.log(mySecondMockFunction.mock.calls);
        // Ver todas as chamadas
        console.log(mySecondMockFunction.mock.calls.length);
        // Ver quantas vezes foi chamada
        expect(mySecondMockFunction).toHaveBeenCalledTimes(2);
        // TESTAR se a função foi chamada 2 vezes
    });
});
mySecondMockFunction.mockReturnValue(true);
describe("General tests", () => {
    it("Testing myMockFunctionWithArgs", () => {
        expect(mySecondMockFunction()).toEqual(true);
    });
});
const myThirdMockFunction = jest.fn();
describe("General tests", () => {
    it("Testing myMockFunctionWithArgs", () => {
        myThirdMockFunction
            .mockReturnValue(10)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce("a");
        expect(myThirdMockFunction()).toEqual(true);
        expect(myThirdMockFunction()).toEqual("a");
        expect(myThirdMockFunction()).toEqual(10);
    });
});
const userGatewayMock = {
    getUserAccount: jest.fn()
};
describe("General tests", () => {
    it("Testing UserGateway", () => {
        userGatewayMock.getUserAccount = jest.fn().mockReturnValue(0);
        expect(userGatewayMock.getUserAccount()).toEqual(0);
    });
});
