"use strict";
class CreateUserUC {
    constructor(validator) {
        this.validator = validator;
    }
    execute(email, name) {
        this.validator.validate(email, name);
    }
}
// class UserInformationValidator {
//   public validate(email: string, name: string): boolean {
//     /** Faz as validações de nome e email */
//     return true;
//   }
// }
class UserInformationValidator {
    validate(email, name) {
        /** Faz as validações de nome */
        this.privateValidateEmail(email);
        return true;
    }
    privateValidateEmail(email) {
        /** Faz as validações de email */
        return true;
    }
}
// Criamos o mock
const userInformationValidatorMock = {
    validate: jest.fn()
};
// Começando o test suite
describe("Testing create user use case", () => {
    it("First test", () => {
        // Aqui, na criação da instância do nosso use case,
        // a gente passa o nosso mock
        const createUserUC = new CreateUserUC(userInformationValidatorMock);
        // realizamos os testes que quisermos
    });
});
