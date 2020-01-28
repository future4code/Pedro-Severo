import { UserGateway } from "../../gateways/User/UserGateway";

export class UnmatchUseCase {
    constructor (
        public userGateway: UserGateway
    ) {};

    async verifyUserExists(input: UnmatchInput) {
        const senderUserId = await this.userGateway.verifyUserExists(input.senderUserId)
        const receptorUserId = await this.userGateway.verifyUserExists(input.receptorUserId)

        if (!senderUserId) {
            throw new Error("You need be logged to unmatch.");
        };

        if (!receptorUserId) {
            throw new Error("This user doesn't exist.");
        };
    };

    async execute(input: UnmatchInput): Promise<UnmatchOutput> {
        await this.verifyUserExists(input);

        try {
            await this.userGateway.unmatch(input.senderUserId, input.receptorUserId)
        } catch (err) {
            throw new Error ("It wasn't possible unmatched.");
        };

        return {
            message: "Match successfully!"
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