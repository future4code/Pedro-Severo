import { authenticate } from './BaseFunctions/baseFunctions';
import { CreatePostInput, CreatePostUseCase } from './../business/usecases/Post/CreatePostUseCase';
import { Request, Response, request } from "express";
import { UserDatabase } from '../data/User/UserDatabase';
import { PostDataBase } from '../data/Post/PostDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';

export async function CreatePostEndpoint (req: Request, res: Response) {
    try {
        const userId = authenticate(req)

        const input: CreatePostInput = {
            picture: req.body.picture,
            description: req.body.description,
            type: req.body.type,
            userId
        };

        const userGateway = new UserDatabase();
        const postGateway = new PostDataBase();
        const idGenerator = new V4IdGenerator();

        const useCase = new CreatePostUseCase(userGateway, postGateway, idGenerator);

        const result = await useCase.execute(input);

        res.status(200).send(result);
      } catch (err) {
        res.status(400).send({
          errorMessage: err.message
        });
      };
};