import { GetAllUsersUseCase } from './../business/usecases/User/GetAllUsersUseCase';
import { GetAllUsersInput } from "../business/usecases/User/GetAllUsersUseCase";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { UserDatabase } from "../data/User/UserDatabase";
import { Request, Response } from 'express';

export async function GetAllUsersEndpoint(req: Request, res: Response) {
    try {
        const input: GetAllUsersInput = {
            userId: authenticate(req)
        };

        const userGateway = new UserDatabase();
        const useCase = new GetAllUsersUseCase(userGateway);

        const result = await useCase.execute(input);
        
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};