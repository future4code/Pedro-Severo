import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';
import { UserGateway } from './../../gateways/UserGateway';
import {User} from '../../entities/User';

export interface RandomIdGenerator {
    generate(): string
};

export class CreateUserUseCase {
    private userGateway: UserGateway;
    private idGenerator: RandomIdGenerator;
    private cryptographyGateway: CryptographyGateway;
    
    
    constructor(userGateway: UserGateway, idGenerator: RandomIdGenerator, cryptographyGateway: CryptographyGateway) {
        this.userGateway = userGateway,
        this.idGenerator = idGenerator,
        this.cryptographyGateway = cryptographyGateway
    };

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