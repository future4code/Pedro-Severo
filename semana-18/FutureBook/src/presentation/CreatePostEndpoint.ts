import { CreatePostInput, CreatePostUseCase } from './../business/usecases/Post/CreatePostUseCase';
import { Request, Response, request } from "express";
import { JwtAuthService } from "../services/auth/jwtAuthService";
import { UserDatabase } from '../data/User/UserDatabase';
import { PostDataBase } from '../data/Post/PostDatabase';

export const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

export const authenticate = (req: Request) => {
    const authService = new JwtAuthService()
    return authService.getUserIdFromToken(getTokenFromHeaders(req.headers))
};

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

        const useCase = new CreatePostUseCase(userGateway, postGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
      } catch (err) {
        res.status(400).send({
          errorMessage: err.message
        });
      };
};