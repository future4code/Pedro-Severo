import { UserGateway } from "../../gateways/User/UserGateway";
import { UserExistenceVerification } from "./UserExistenceVerification/UserExistenceVerification";

export class UnmatchUseCase extends UserExistenceVerification {
    constructor (
        public userGateway: UserGateway
    ) {
        super(userGateway);
    };

    async execute(input: UnmatchInput): Promise<UnmatchOutput> {
        await this.verifyUserExists(input.senderUserId);
        await this.verifyUserExists(input.receptorUserId);

        try {
            await this.userGateway.unmatch(input.senderUserId, input.receptorUserId)
        } catch (err) {
            throw new Error ("It wasn't possible unmatched.");
        };

        return {
            message: "Unmatch successfully!"
        }
    };

    
};

export interface UnmatchInput {
    senderUserId: string,
    receptorUserId: string
}

export interface UnmatchOutput {
    message: string
};