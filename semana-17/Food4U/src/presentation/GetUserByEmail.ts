import { UserDatabase } from './../data/UserDatabase';
import { GetUserByEmailInput, GetUserByEmailUseCase } from './../business/usecases/User/GetUserByEmail';
import {Request, Response} from 'express'


export async function getUserByEmailEndpoint(req: Request, res: Response) {
    try {
        const getUserByEmailInput: GetUserByEmailInput = {
            userEmail: req.params.userEmail
        };

        const userGateway = new UserDatabase;

        const useCase = new GetUserByEmailUseCase(userGateway);
        const result = await useCase.execute(getUserByEmailInput);

        res.send({...result});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};