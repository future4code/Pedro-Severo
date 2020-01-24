import { Comment } from '../../entities/Comment';
import { Post } from './../../entities/Post';

export interface PostGateway {
    createPost(post: Post): Promise<void>;
    likePost(userId: string, postId: string): Promise<object>;
    toComment(comment: Comment): Promise<void>;
    getComments(postId: string): Promise<Comment[]>;
};