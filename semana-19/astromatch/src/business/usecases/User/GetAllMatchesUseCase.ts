import { UserGateway, GetAllMatchesResponse } from "../../gateways/User/UserGateway";

export class GetAllMatchesUseCase {
    constructor (
        private userGateway: UserGateway
    ) {};

    async verifyUserExists(input: GetAllMatchesInput) {
        const userId = this.userGateway.verifyUserExists(input.userId);
    
        if (!userId) {
            throw new Error("You need be logged to see your matches.");
        };
    };   

    public async execute(input: GetAllMatchesInput): Promise<GetAllMatchesOutput> {
        this.verifyUserExists(input);

        return {
            matches: await this.userGateway.getAllMatches(input.userId)
        };
    };
};

export interface GetAllMatchesInput {
    userId: string
};

export interface GetAllMatchesOutput {
    matches: GetAllMatchesResponse[];
};