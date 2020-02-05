import { UserGateway } from "../../gateways/User/UserGateway";
import { CryptographyGateway } from "../../gateways/Cryptography/CryptographyGateway";
import { IdGeneratorGateway } from "../../gateways/Auth/IdGeneratorGateway";
import { User } from "../../entities/User";

export class SignUpUseCase {
    constructor (
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGenerator: IdGeneratorGateway
    ) {};

    async execute(input: SignUpInput): Promise<SignUpOutput> {
        const { name, email, photo, birth, password } = input 
        
        const encryptedPassword = await this.cryptographyGateway.encrypt(password);
        
        const birthDate = new Date(birth)

        const user = new User(
            this.idGenerator.generateId(),
            name,
            email,
            photo,
            birthDate,
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
    photo: string,
    birth: string,
    password: string
};

export interface SignUpOutput {
    message: string
};