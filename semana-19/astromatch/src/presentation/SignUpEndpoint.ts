import { SignUpInput, SignUpUseCase } from './../business/usecases/User/SignUpUseCase';
import { UserDatabase } from '../data/User/UserDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { BcryptService } from '../services/cryptography/bcryptService';
import { Request, Response } from 'express';

export async function SignUpEndpoint(req: Request, res: Response) {
    try {
        const signUpInput: SignUpInput = {
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo,
            birth: req.body.birth,        
            password: req.body.password
        };

        const userGateway = new UserDatabase();
        const idGenerator = new V4IdGenerator();
        const bcryptService = new BcryptService();

        const useCase = new SignUpUseCase(userGateway, bcryptService, idGenerator);
        
        const result = await useCase.execute(signUpInput);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};
