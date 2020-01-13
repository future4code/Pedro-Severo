import { UserGateway } from './../../gateways/UserGateway';
import {User} from '../../entities/User';

export interface RandomIdGenerator {
    generate(): string
};

export class CreateUserUseCase {
    private userGateway: UserGateway;
    private idGenerator: RandomIdGenerator;
    
    constructor(userGateway: UserGateway, idGenerator: RandomIdGenerator) {
        this.userGateway = userGateway,
        this.idGenerator = idGenerator
    };

    async execute(input: CreateUserInput) {
        const user = new User(this.idGenerator.generate(), input.email, input.password);

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