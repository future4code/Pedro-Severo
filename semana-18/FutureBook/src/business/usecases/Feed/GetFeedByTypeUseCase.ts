import { FeedGateway } from "../../gateways/Feed/FeedGateway";
import { PostType } from "../../entities/Post";

export class GetFeedByTypeUseCase {
    constructor (
        private feedGateway: FeedGateway
    ) {};

    async execute(input: GetFeedByTypeInput) {
        const {userId, offset, type} = input

        return this.feedGateway.getPostsFeedByType(userId, offset, type)
    };
};


export interface GetFeedByTypeInput {
    userId: string, 
    offset: number,
    type: PostType
};