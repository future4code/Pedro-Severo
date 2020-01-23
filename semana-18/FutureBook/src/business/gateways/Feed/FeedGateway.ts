import { Post } from "../../entities/Post";

export interface FeedResponse {
    post: Post
    name: string
};

export interface FeedGateway {
    getPostsFeedForUser(userId: string): Promise<FeedResponse[]>
};