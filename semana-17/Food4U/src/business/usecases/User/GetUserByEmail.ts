import { UserGateway } from './../../gateways/UserGateway';

export class GetUserByEmailUseCase {
    private userGateway: UserGateway;

    
    constructor (userGateway: UserGateway) {
        this.userGateway = userGateway
    }

    async execute(input: GetUserByEmailInput): Promise<GestUserByEmailOutput> {
        const user = await this.userGateway.getUserByEmail(input.userEmail);

        return { 
            user: {
                userEmail: user.email,
                userId: user.id,
                userPassword: user.password
            }
        };
    };
};

export interface GetUserByEmailInput {
    userEmail: string
};

interface GestUserByEmailOutput {
    user: {
        userEmail: string,
        userId: string, 
        userPassword: string
    }
};