import { Comment } from '../../entities/Comment';
import { IdGeneratorGateway } from '../../gateways/auth/idGenerator';
import { PostGateway } from '../../gateways/Post/PostGateway';
import { UserGateway } from "../../gateways/User/UserGateway";

export class ToCommentUseCase {
    constructor (
        private userGateway: UserGateway,
        private postGateway: PostGateway,
        private idGenarator: IdGeneratorGateway,
    ) {};

    async verifyUserExists(userId: string) {
        const user = await this.userGateway.verifyUserExists(userId)

        if (!user) {
            throw new Error("You need be logged to create a post.");
        };
    };

    async execute (input: ToCommentInput): Promise<ToCommentOutput> {
        this.verifyUserExists(input.userId);
        const user = await this.userGateway.getUserById(input.userId);

        const newComment = new Comment(
            this.idGenarator.generateId(),
            user.getName(),
            input.text,
            input.userId,
            input.postId,
        );

        try {
            await this.postGateway.toComment(newComment);
        } catch (err) {
            throw new Error ("It wasn't possible to comment.")
        };
        
        return {
            id: newComment.getId(),
            name: newComment.getName(),
            text: newComment.getText(),
            userId: newComment.getUserId(),
            postId: newComment.getPostId(),
            creationDate: newComment.getDate()
        };
    };
};

export interface ToCommentInput {
    text: string,
    userId: string,
    postId: string,
};

interface ToCommentOutput {
    id: string,
    name: string,
    text: string,
    userId: string,
    postId: string,
    creationDate: Date
};