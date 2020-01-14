import { AuthenticationGateway } from './../../gateways/authentication/authenticationGateway';
import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';
import { UserGateway } from './../../gateways/UserGateway';

export class LoginUseCase {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private authenticationGateway: AuthenticationGateway
    ) {}

    async execute(input: LoginInput): Promise<LoginOutPut> {
        const user = await this.userGateway.getUserByEmail(input.email);
        const passwordAuthentication = await this.cryptographyGateway.compare(
            input.password,
            user.getPassword()
        );

        if (!passwordAuthentication) {
            throw new Error("Email or password are invalid");
        };

        const token = this.authenticationGateway.generateToken(user.getId());

        return {
            token
        };
    };
};

export interface LoginInput {
    email: string,
    password: string,
};

interface LoginOutPut { 
    token: string,
};