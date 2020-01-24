import { PostGateway } from "../../gateways/Post/PostGateway";
import { UserGateway } from "../../gateways/User/UserGateway";


export class LikePostUseCase {
    constructor (
        private postGateway: PostGateway,
        private userGateway: UserGateway
    ) {};

    async verifyUserExists(input: LikePostInput) {
        const userId = await this.userGateway.verifyUserExists(input.userId)

        if (!userId) {
            throw new Error("You need be logged to like a post.");
        };
    };

    async execute(input: LikePostInput) {
        await this.verifyUserExists(input);

        try {
            return await this.postGateway.likePost(input.userId, input.postId)
        } catch (err) {
            throw new Error ("It wasn't possible to send friendship request.");
        };
    };
};

export interface LikePostInput {
    userId: string,
    postId: string
};