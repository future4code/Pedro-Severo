import { UserGateway } from "../../gateways/User/UserGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";
import { IdGeneratorGateway } from "../../gateways/auth/idGenerator";
import { User } from "../../entities/User";

export class SignUpUseCase {
    constructor (
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGenerator: IdGeneratorGateway
    ) {};

    async execute(input: SignUpInput): Promise<SignUpOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(input.password);
        
        const user = new User(
            this.idGenerator.generateId(),
            input.name,
            input.email,
            encryptedPassword
        );

        try {
            await this.userGateway.signUp(user);
        } catch (err) {
            throw new Error ("It wasn't possible to create user.")
        };

        return {
            message: "SignUp done successfully"
        };
    };
};

export interface SignUpInput{
    name: string,
    email: string,
    password: string
};

export interface SignUpOutput {
    message: string
};