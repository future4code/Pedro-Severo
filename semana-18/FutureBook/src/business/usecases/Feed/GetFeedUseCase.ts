import { FeedGateway } from "../../gateways/Feed/FeedGateway";

export class GetFeedUseCase {
    constructor (
        private feedGateway: FeedGateway
    ) {};

    async execute(input: GetFeedInput) {
        return this.feedGateway.getPostsFeedForUser(input.userId)
    };
};


export interface GetFeedInput {
    userId: string, 
};