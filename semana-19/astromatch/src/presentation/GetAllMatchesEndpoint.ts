import { GetAllMatchesInput, GetAllMatchesUseCase } from "../business/usecases/User/GetAllMatchesUseCase";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { Request, Response } from "express";
import { UserDatabase } from "../data/User/UserDatabase";


export async function GetAllMatchesEndpoint (req: Request, res: Response) {
    try {
        const input: GetAllMatchesInput = {
            userId: authenticate(req)
        };

        const userGateway = new UserDatabase();
        const useCase = new GetAllMatchesUseCase(userGateway);

        const result = await useCase.execute(input);
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
}; 