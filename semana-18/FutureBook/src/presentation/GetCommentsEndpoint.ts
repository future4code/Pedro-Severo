import { GetCommentsInput, GetCommentsUseCase } from './../business/usecases/Post/GetCommentsUseCase';
import { Request, Response } from "express";
import { PostDataBase } from '../data/Post/PostDatabase';


export async function GetCommentsEndpoint(req: Request, res: Response) {
    try {
        const input: GetCommentsInput = {
            postId: req.body.postId
        };
        
        const postGateway = new PostDataBase();

        const useCase = new GetCommentsUseCase(postGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};