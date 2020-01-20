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
const Recipe_1 = require("../../entities/Recipe");
class CreateRecipeUseCase {
    constructor(userGateway, recipeGateway) {
        this.userGateway = userGateway;
        this.recipeGateway = recipeGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateInput(input);
            yield this.verifyUserExists(input.userId);
            const createdRecipe = yield this.createRecipe(input);
            return {
                title: createdRecipe.getTitle(),
                description: createdRecipe.getDescription(),
                userId: createdRecipe.getUserId(),
                createdDate: createdRecipe.getCreationDate()
            };
        });
    }
    validateInput(input) {
        if (!(input.title && input.description && input.userId)) {
            throw new Error('Alguma informação faltando');
        }
    }
    verifyUserExists(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.userGateway.verifyUserExists(userId);
            if (!userExists) {
                throw new Error('Não é possível criar uma receita para um usuário não existente');
            }
        });
    }
    createRecipe(input) {
        const newRecipe = new Recipe_1.Recipe(input.title, input.description, input.userId);
        return this.recipeGateway.createRecipe(newRecipe);
    }
}
exports.CreateRecipeUseCase = CreateRecipeUseCase;
