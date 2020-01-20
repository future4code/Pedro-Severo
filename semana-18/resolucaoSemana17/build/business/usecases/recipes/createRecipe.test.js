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
const createRecipe_1 = require("./createRecipe");
const Recipe_1 = require("../../entities/Recipe");
describe('Tests createRecipe useCase', () => {
    it('Should create a recipe', () => __awaiter(void 0, void 0, void 0, function* () {
        const userGateway = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true)
        };
        const input = { description: "Teste descricao", title: "Teste titulo", userId: "1" };
        const recipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe_1.Recipe(input.title, input.description, input.userId))
        };
        const usecase = new createRecipe_1.CreateRecipeUseCase(userGateway, recipeGateway);
        const response = yield usecase.execute(input);
        expect(response.userId).toBe('1');
        expect(response.title).toBe('Teste titulo');
    }));
    it('Should throw error if input is incomplete', () => __awaiter(void 0, void 0, void 0, function* () {
        const userGateway = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true)
        };
        const input = { description: "Teste descricao", title: "", userId: "1" };
        const recipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe_1.Recipe(input.title, input.description, input.userId))
        };
        const usecase = new createRecipe_1.CreateRecipeUseCase(userGateway, recipeGateway);
        yield expect(usecase.execute(input)).rejects.toThrowError('Alguma informação faltando');
    }));
});
