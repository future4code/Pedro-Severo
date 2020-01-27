import { Request, Response } from "express";
import { LikePostInput, LikePostUseCase } from "../business/usecases/Post/LikePostUseCase";
import { UserDatabase } from "../data/User/UserDatabase";
import { PostDataBase } from '../data/Post/PostDatabase';
import { authenticate } from "./BaseFunctions/baseFunctions";


export async function LikePostEndpoint(req: Request, res: Response) {
    try {
        const userId = authenticate(req)

        const input: LikePostInput = {
            userId,
            postId: req.body.postId
        };

        const postGateway = new PostDataBase()
        const userGateway = new UserDatabase();

        const useCase = new LikePostUseCase(postGateway, userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};