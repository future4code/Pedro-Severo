import { PostGateway } from './../../business/gateways/Post/PostGateway';
import { PostType, Post } from "../../business/entities/Post";
import { KnexConnection } from "../KnexConnection/knexConnection";

export class PostModel {
    constructor(
        public id: string,
        public picture: string, 
        public description: string, 
        public type: PostType,
        public user_id: string,
        public creation_date: Date = new Date(),
    ) {};
};

export class PostEntityMapper {
    entityToModel(entity: Post): PostModel {
        return {
            id: entity.getId(),
            picture: entity.getPicture(),
            description: entity.getDescription(),
            type: entity.getType(),
            user_id: entity.getUserId(),
            creation_date: entity.getDate()
        };
    };
};


export class PostDataBase extends KnexConnection implements PostGateway {
    private postEntityMapper: PostEntityMapper;

    constructor() {
        super();
        this.postEntityMapper = new PostEntityMapper();
    };

    public async createPost(post: Post) {
        await this.connection('posts_fbook').insert(this.postEntityMapper.entityToModel(post));
    };

    public async likePost(userId: string, postId: string): Promise<object> {
        const likeVerification = await this.connection.raw(
            `
            SELECT * FROM users_posts
            WHERE (user_id='${userId}' AND post_id='${postId}')
            `   
        );

        if (likeVerification[0][0]) {
            await this.connection.raw(
                `
                DELETE FROM users_posts
                WHERE (user_id='${userId}' AND post_id='${postId}')
                `
            );

            return {
                message: "Post disliked successfully."
            };
        } else {
            await this.connection.raw(
                `
                INSERT INTO users_posts (user_id, post_id)
                VALUES ("${userId}", "${postId}");
                `
            );

            return {
                message: "Post liked successfully."
            }
        };
    }; 
};