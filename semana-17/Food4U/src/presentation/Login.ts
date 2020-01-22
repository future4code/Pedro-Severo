import { LoginUseCase, LoginInput } from './../business/usecases/Authentication/Login';
import { JwtImplementation } from './../services/jwt/jwtimplementation';
import { UserDatabase } from './../data/UserDatabase';
import { CreateUserUseCase, CreateUserInput } from './../business/usecases/User/CreateUserUseCase';
import {Request, Response} from 'express'
import { BcryptImplementation } from '../services/crypt/bcryptImplementation';

export async function loginEndpoint(req: Request, res: Response) {
    try {
        const loginInput: LoginInput = {
            email: req.body.email, 
            password: req.body.password

        };

        const userGateway = new UserDatabase();
        const bcryptImplementation = new BcryptImplementation();
        const jwtImplementation = new JwtImplementation();

        const useCase = new LoginUseCase(userGateway, bcryptImplementation, jwtImplementation);

        const result = await useCase.execute(loginInput);

        res.send({...result, message: 'Login done succesfully'});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};