import { UserGateway } from "../../gateways/User/UserGateway";

export class MatchUseCase {
    constructor (
        private userGateway: UserGateway
    ) {};

    async verifyUserExists(input: MatchInput) {
        const senderUserId = await this.userGateway.verifyUserExists(input.senderUserId)
        const receptorUserId = await this.userGateway.verifyUserExists(input.receptorUserId)

        if (!senderUserId) {
            throw new Error("You need be logged to match with anyone.");
        };

        if (!receptorUserId) {
            throw new Error("This user doesn't exist.");
        };
    };

    async execute(input: MatchInput): Promise<MatchOutput> {
        await this.verifyUserExists(input);

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

