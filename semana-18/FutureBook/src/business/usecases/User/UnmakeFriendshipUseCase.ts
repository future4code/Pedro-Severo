import { UserGateway } from "../../gateways/User/UserGateway";

export class UnmakeFriendshipUseCase {
    constructor(
        private userGateway: UserGateway
    ) {};

    async verifyUserExists(input: UnmakeFriendshipInput) {
        const senderUserId = await this.userGateway.verifyUserExists(input.senderUserId)
        const receptorUserId = await this.userGateway.verifyUserExists(input.receptorUserId)

        if (!senderUserId) {
            throw new Error("You need be logged to unmade a friendship.");
        };

        if (!receptorUserId) {
            throw new Error("This user doesn't exist.");
        };
    };

    async execute(input: UnmakeFriendshipInput) {
        await this.verifyUserExists(input);

        try {
            await this.userGateway.unmakeFriendship(input.senderUserId, input.receptorUserId)
        } catch (err) {
            throw new Error ("It wasn't possible unmade this friendship.");
        };

        return {
            message: "Friendship unmade successfully!"
        }
    };
};

export interface UnmakeFriendshipInput {
    senderUserId: string,
    receptorUserId: string
}

export interface UnmakeFriendshipOutput {
    message: string
};