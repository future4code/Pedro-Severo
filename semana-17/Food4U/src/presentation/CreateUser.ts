import { V4IdGenerator } from './../services/V4IdGenerator';
import { UserDatabase } from './../data/UserDatabase';
import { CreateUserUseCase } from './../business/usecases/User/CreateUserUseCase';
import {Request, Response} from 'express'
import { CreateUserInput } from '../business/usecases/User/CreateUserUseCase'
import { BcryptImplementation } from '../services/crypt/bcryptImplementation';

export async function createUserEndpoint(req: Request, res: Response) {
    try {
        const createUserInput: CreateUserInput = {
            email: req.body.email, 
            password: req.body.password
        };

        const userGateway = new UserDatabase();
        const idGenerator = new V4IdGenerator()
        const bcryptImplementation = new BcryptImplementation()
        const useCase = new CreateUserUseCase(userGateway, idGenerator, bcryptImplementation);
        const result = await useCase.execute(createUserInput);

        res.send({...result, message: 'User created succesfully'});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};