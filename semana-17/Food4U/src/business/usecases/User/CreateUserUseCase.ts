import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';
import { UserGateway } from '../../gateways/user/UserGateway';
import {User} from '../../entities/User';

export interface RandomIdGenerator {
    generate(): string;
};

export class CreateUserUseCase {
    constructor (
        private userGateway: UserGateway,
        private idGenerator: RandomIdGenerator,
        private cryptographyGateway: CryptographyGateway
    ) {};
    
    async execute(input: CreateUserInput) {
        const encryptPassword = await this.cryptographyGateway.encrypt(input.password);

        const user = new User(this.idGenerator.generate(), input.email, encryptPassword);

        await this.userGateway.createUser(user);

        return {
            id: user.getId(),
            email: user.getEmail()
        };
    };
};

export interface CreateUserInput {
    email: string,
    password: string,
};

export interface CreateUserOutput {
    id: string,
    email: string
};