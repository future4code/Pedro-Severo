import { UserGateway } from './../../../gateways/User/UserGateway';

export abstract class UserExistenceVerification {
    constructor (
        public userGateway: UserGateway
    ) {};
    
    async verifyUserExists(input: string) {
        const user = await this.userGateway.verifyUserExists(input)        

        if (!user) {
            throw new Error("You need to be logged to match with anyone.");
        };
    };
};
