import { Response, Request } from "express";
import { LoginInput, LoginUseCase } from "../business/usecases/User/LoginUseCase";
import { UserDatabase } from "../data/User/UserDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { JwtAuthService } from "../services/auth/jwtAuthService";


export async function LoginEndpoint(req: Request, res: Response) {
    try {
        const loginInput: LoginInput = {
            email: req.body.email, 
            password: req.body.password
        };

        const userGateway = new UserDatabase();
        const cryptographyGateway = new BcryptService();
        const userTokenGateway = new JwtAuthService();

        const useCase = new LoginUseCase(userGateway, cryptographyGateway, userTokenGateway);

        const result = await useCase.execute(loginInput);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};