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
        return {
            token: ""
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