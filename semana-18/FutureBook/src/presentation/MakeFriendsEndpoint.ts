import { authenticate } from './BaseFunctions/baseFunctions';
import { Request, Response } from "express";
import { UserDatabase } from '../data/User/UserDatabase';
import { MakeFriendsInput, MakeFriendsUseCase } from "../business/usecases/User/MakeFriendsUseCase";

export async function MakeFriendsEndpoint(req: Request, res: Response) {
    try {
        const senderUserId = authenticate(req)

        const input: MakeFriendsInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new MakeFriendsUseCase(userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};