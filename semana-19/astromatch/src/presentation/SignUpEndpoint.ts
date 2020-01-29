import { SignUpInput, SignUpUseCase } from './../business/usecases/User/SignUpUseCase';
import { UserDatabase } from '../data/User/UserDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { BcryptService } from '../services/cryptography/bcryptService';

export async function SignUpEndpoint() {
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

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };    
    } catch (err) {
        throw new Error(err);
    };
};
