import { FeedGateway } from './../business/gateways/feed/FeedGateway';
import { KnexConnection } from "./knexConnection/knexConnection";

export class FeedDatabase extends KnexConnection implements FeedGateway {
    
    getFeedRecipesForUser(userId: string) {
        this.connection
    };
};