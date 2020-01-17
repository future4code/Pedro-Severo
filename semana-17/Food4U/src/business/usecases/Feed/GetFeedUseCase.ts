import { FeedGateway } from './../../gateways/feed/FeedGateway';

export class GetFeedUseCase {
    constructor (private feedGateway: FeedGateway) {};

    async execute(input: GetFeedInput) {

    };
};

interface GetFeedInput { 
    userId: string,
};