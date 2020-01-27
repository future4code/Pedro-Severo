import { authenticate } from './BaseFunctions/baseFunctions';
import { Request, Response } from "express";
import { UserDatabase } from '../data/User/UserDatabase';
import { UnmakeFriendshipInput, UnmakeFriendshipUseCase } from "../business/usecases/User/UnmakeFriendshipUseCase";

export async function UnmakeFriendshipEndpoint(req: Request, res: Response) {
    try {
        const senderUserId = authenticate(req)

        const input: UnmakeFriendshipInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new UnmakeFriendshipUseCase(userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};