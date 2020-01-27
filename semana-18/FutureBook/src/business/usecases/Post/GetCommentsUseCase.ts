import { PostGateway } from "../../gateways/Post/PostGateway";

export class GetCommentsUseCase {
    constructor (
        private postGateway: PostGateway
    ) {};

    async execute(input: GetCommentsInput) {
        return this.postGateway.getComments(input.postId)
    };
};

export interface GetCommentsInput {
    postId: string
};