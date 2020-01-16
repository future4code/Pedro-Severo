import { UserGateway } from './../../gateways/user/UserGateway';
import { RecipeGateway } from './../../gateways/recipe/RecipeGateway';
import { Recipe } from '../../entities/Recipe';

export interface RandomIdGenerator {
    generate(): string;
};

export class CreateRecipeUseCase {
    constructor (
        private recipeGateway: RecipeGateway,
        private userGateway: UserGateway,
        private idGenerator: RandomIdGenerator
    ) {};

    async verifyUserExist(userId: string) {
        const verifyUser = this.userGateway.verifyUserExist(userId);

        if (!verifyUser) {
            throw new Error ("You need to be logged to create a recipe.")
        };
    };

    async execute(input: CreateRecipeInput) {
        if (!input.title || !input.description || !input.userId) {
            throw new Error ("Missing any information.")
        };
        
        // aqui eu criei uma função fora do execute para o código ficar mais limpo dentro do execute
        // eu poderia ter feito a mesma coisa nas linhas 25/27 e linha 33/35
        await this.verifyUserExist(input.userId);

        const recipe = new Recipe(this.idGenerator.generate(), input.title, input.description, new Date(), input.userId);

        await this.recipeGateway.createRecipe(recipe);

        return {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription()
        };
    };
};

export interface CreateRecipeInput {
    title: string,
    description: string, 
    userId: string,
};

export interface CreateRecipeOutput {
    id: string,
    title: string,
    description: string
};