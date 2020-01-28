import { Request, Response } from "express";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { MatchInput, MatchUseCase } from "../business/usecases/User/MatchUseCase";
import { UserDatabase } from "../data/User/UserDatabase";


export async function MatchEndpoint(req: Request, res: Response) {
    try {
        const senderUserId = authenticate(req)

        const input: MatchInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new MatchUseCase(userGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };

}