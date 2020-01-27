import { Request, Response } from "express";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { ToCommentInput, ToCommentUseCase } from '../business/usecases/Post/ToCommentUseCase';
import { UserDatabase } from "../data/User/UserDatabase";
import { PostDataBase } from "../data/Post/PostDatabase";
import { V4IdGenerator } from "../services/auth/v4IdGenerator";


export async function ToCommentEndpoint (req: Request, res: Response) {
    try {
        const userId = authenticate(req)

        const input: ToCommentInput = {
            text: req.body.text,
            postId: req.body.postId,
            userId
        };

        const userGateway = new UserDatabase();
        const postGateway = new PostDataBase();
        const idGenerator = new V4IdGenerator();

        const useCase = new ToCommentUseCase(userGateway, postGateway, idGenerator);

        const result = await useCase.execute(input);

        res.status(200).send(result);
      } catch (err) {
        res.status(400).send({
          errorMessage: err.message
        });
      };

};