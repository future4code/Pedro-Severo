import { User } from './../../entities/User';
import { UserGateway } from '../../gateways/user/UserGateway';

export class GetUserByEmailUseCase {
    private userGateway: UserGateway;

    
    constructor (userGateway: UserGateway) {
        this.userGateway = userGateway
    }

    async execute(input: GetUserByEmailInput): Promise<GestUserByEmailOutput> {
        const user = await this.userGateway.getUserByEmail(input.userEmail);

        return { 
            user: new User(user.id, user.email, user.password)
        };
    };
};

export interface GetUserByEmailInput {
    userEmail: string
};

interface GestUserByEmailOutput {
    user: User
};