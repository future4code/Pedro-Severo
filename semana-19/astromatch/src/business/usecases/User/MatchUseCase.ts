import { UserGateway } from "../../gateways/User/UserGateway";
import { UserExistenceVerification } from "./UserExistenceVerification/UserExistenceVerification";

export class MatchUseCase extends UserExistenceVerification {
    constructor (
        public userGateway: UserGateway
    ) {
        super(userGateway);
    };
    
    async execute(input: MatchInput): Promise<MatchOutput> {
        await this.verifyUserExists(input.senderUserId);
        await this.verifyUserExists(input.receptorUserId);

        try {
            await this.userGateway.match(input.senderUserId, input.receptorUserId)
        } catch (err) {
            throw new Error ("It wasn't possible to match.");
        };

        return {
            message: "Match sent successfully!"
        };
    };
};


export interface MatchInput {
    senderUserId: string,
    receptorUserId: string
}

export interface MatchOutput {
    message: string
};

