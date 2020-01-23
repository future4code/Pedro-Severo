import { KnexConnection } from "../KnexConnection/knexConnection";
import { FeedGateway, FeedResponse } from "../../business/gateways/Feed/FeedGateway";
import { Post, PostType } from "../../business/entities/Post";

interface PostFeedModel {
    picture: string,
    description: string,
    type: PostType,
    user_id: string,
    creation_date: string,
    userName: string
};

export class FeedDatabase extends KnexConnection implements FeedGateway {
    constructor() {
        super()
    };

    async getPostsFeedForUser(userId: string): Promise<FeedResponse[]> {
        const query = await this.connection.raw(
              `
              SELECT posts.picture, posts.description, posts.type, posts.user_id, posts.creation_date, users.name as userName 
              FROM friendships friends 
              JOIN posts_fbook posts 
              ON (friends.sender_id=posts.user_id) OR (friends.receptor_id=posts.user_id) 
              JOIN users_fbook users 
              ON (posts.user_id=users.id) OR (posts.user_id=users.id) 
              WHERE (sender_id="${userId}") OR (receptor_id="${userId}");
              `
        );

        const postsFromDb: PostFeedModel[] = query[0]

        return postsFromDb.map(post => ({
            post: new Post(post.picture, post.description, post.type, post.user_id, new Date(post.creation_date)),
            name: post.userName
        }))
    };
};