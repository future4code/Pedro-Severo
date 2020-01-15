import { V4IdGenerator } from './../services/V4IdGenerator';
import { RecipeDatabase } from './../data/RecipeDatabase';
import { CreateRecipeInput, CreateRecipeUseCase } from './../business/usecases/Recipe/CreateRecipeUseCase';
import { Request, Response } from 'express';


export async function createRecipeEndpoint(req: Request, res: Response) {
    try {
        const createRecipeInput: CreateRecipeInput = {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            userId: req.body.userId
        };

        const recipeGateway = new RecipeDatabase();
        const idGenerator = new V4IdGenerator();
        const useCase = new CreateRecipeUseCase(recipeGateway, idGenerator);
        const result = await useCase.execute(createRecipeInput);

        res.send({...result, message: 'Recipe created succesfully'});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};