"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMockFuncion = jest.fn();
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
const UserGatewayMock = jest.fn(() => {
    return {
        getUsers: () => { return [goliUser]; }
    };
});
describe("General tests", () => {
    it("Testing myMockFunctionWithArgs", () => { });
});
