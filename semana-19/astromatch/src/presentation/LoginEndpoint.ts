import { LoginInput, LoginUseCase } from "../business/usecases/User/LoginUseCase";
import { UserDatabase } from "../data/User/UserDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { JwtAuthService } from "../services/auth/jwtAuthService";


export async function LoginEndpoint() {
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

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };    
    } catch (err) {
        throw new Error(err);
    };
};