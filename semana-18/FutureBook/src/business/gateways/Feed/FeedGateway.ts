import { Post } from "../../entities/Post";

export interface FeedGateway {
    getPostsFeedForUser(userId: string): Promise<any>
};