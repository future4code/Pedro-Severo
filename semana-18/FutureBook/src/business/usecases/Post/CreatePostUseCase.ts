import { PostGateway } from "../../gateways/Post/PostGateway";
import { UserGateway } from "../../gateways/User/UserGateway";
import { PostType, Post } from "../../entities/Post";

export class CreatePostUseCase {
    constructor (
        private userGateway: UserGateway,
        private postGateway: PostGateway 
    ) {};

    validateInput(input: CreatePostInput) {
        const { picture, description, type, userId } = input
        
        if (!picture || !description || !type || !userId) {
            throw new Error('Missing information to create a post.');
        };
    };

    async verifyUserExists(userId: string) {
        const user = await this.userGateway.verifyUserExists(userId)

        if (!user) {
            throw new Error("You need be logged to create a post.");
        };
    };

    async execute(input: CreatePostInput): Promise<CreatePostOutput> {
        this.validateInput(input);
        this.verifyUserExists(input.userId);

        const { picture, description, type, userId } = input
        const newPost = new Post(picture, description, type, userId);

        try {
            await this.postGateway.createPost(newPost);
        } catch (err) {
            throw new Error ("It wasn't possible create the post.")
        };
        
        return {
            picture: newPost.getPicture(),
            description: newPost.getDescription(),
            type: newPost.getType(),
            userId: newPost.getUserId(),
            date: newPost.getDate()
        };
    };
};

export interface CreatePostInput {
    picture: string, 
    description: string, 
    type: PostType,
    userId: string 
};

interface CreatePostOutput {
    picture: string, 
    description: string, 
    type: PostType,
    userId: string, 
    date: Date,
};