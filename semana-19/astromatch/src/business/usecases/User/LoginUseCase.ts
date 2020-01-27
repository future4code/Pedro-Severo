import { UserGateway } from "../../gateways/User/UserGateway";
import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";

export class LoginUseCase {
    constructor (
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private userTokenGateway: UserTokenGateway,
    ) {};

    async execute(input: LoginInput): Promise<LoginOutput> {
        const user = await this.userGateway.getUserByEmail(input.email);
        const comparedPassword = await this.cryptographyGateway.compare(
            input.password,
            user.getPassword()
        );

        if (!comparedPassword) {
            throw new Error("Email or password are incorrect.");
        };

        return {
            token: this.userTokenGateway.generateToken(user.getId())
        };
    };
};

export interface LoginInput {
    email: string,
    password: string
};

interface LoginOutput {
    token: string,
};