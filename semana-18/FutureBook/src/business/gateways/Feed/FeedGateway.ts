import { Post, PostType } from "../../entities/Post";

export interface FeedResponse {
    post: Post
    name: string
};

export interface FeedGateway {
    getPostsFeedForUser(userId: string, offset: number): Promise<FeedResponse[]>;
    getPostsFeedByType(userId: string, offset: number, type: PostType): Promise<FeedResponse[]>
};