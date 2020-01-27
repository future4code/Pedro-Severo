import { UserGateway } from "../../gateways/User/UserGateway";

export class MakeFriendshipUseCase {
    constructor(
        private userGateway: UserGateway
    ) {};

    async verifyUserExists(input: MakeFriendshipInput) {
        const senderUserId = await this.userGateway.verifyUserExists(input.senderUserId)
        const receptorUserId = await this.userGateway.verifyUserExists(input.receptorUserId)

        if (!senderUserId) {
            throw new Error("You need be logged to make a friend.");
        };

        if (!receptorUserId) {
            throw new Error("This user doesn't exist.");
        };
    };

    async execute(input: MakeFriendshipInput): Promise<MakeFriendshipOutput> {
        await this.verifyUserExists(input);

        try {
            await this.userGateway.makeFriendship(input.senderUserId, input.receptorUserId)
        } catch (err) {
            throw new Error ("It wasn't possible to send friendship request.");
        };

        return {
            message: "Friendship request sent successfully!"
        }
    };
};

export interface MakeFriendshipInput {
    senderUserId: string,
    receptorUserId: string
}

export interface MakeFriendshipOutput {
    message: string
};