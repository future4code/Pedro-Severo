import { authenticate } from './BaseFunctions/baseFunctions';
import { Request, Response } from "express";
import { UserDatabase } from '../data/User/UserDatabase';
import { MakeFriendshipInput, MakeFriendshipUseCase } from "../business/usecases/User/MakeFriendshipUseCase";

export async function MakeFriendshipEndpoint(req: Request, res: Response) {
    try {
        const senderUserId = authenticate(req)

        const input: MakeFriendshipInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new MakeFriendshipUseCase(userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};