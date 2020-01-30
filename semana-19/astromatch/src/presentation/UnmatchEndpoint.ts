import { UnmatchUseCase } from './../business/usecases/User/UnmatchUseCase';
import { authenticate } from "./BaseFunctions/baseFunctions";
import { UnmatchInput } from "../business/usecases/User/UnmatchUseCase";
import { UserDatabase } from "../data/User/UserDatabase";
import { Request, Response } from 'express';

export async function UnmatchEndpoint(req: Request, res: Response) {
    try {
        const senderUserId = authenticate(req)

        const input: UnmatchInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new UnmatchUseCase(userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};