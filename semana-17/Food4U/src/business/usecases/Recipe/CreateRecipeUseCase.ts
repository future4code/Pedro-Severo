import { RecipeGateway } from './../../gateways/recipe/RecipeGateway';
import { Recipe } from '../../entities/Recipe';

export interface RandomIdGenerator {
    generate(): string;
};

export class CreateRecipeUseCase {
    constructor (
        private recipeGateway: RecipeGateway,
        private idGenerator: RandomIdGenerator
    ) {};

    async execute(input: CreateRecipeInput) {
        const recipe = new Recipe(this.idGenerator.generate(), input.title, input.description, input.date, input.userId);

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
    date: string, 
    userId: string,
};

export interface CreateRecipeOutput {
    id: string,
    title: string,
    description: string
};