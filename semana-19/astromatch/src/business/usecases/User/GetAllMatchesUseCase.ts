import { UserGateway, GetAllMatchesResponse } from "../../gateways/User/UserGateway";
import { UserExistenceVerification } from "./UserExistenceVerification/UserExistenceVerification";

export class GetAllMatchesUseCase extends UserExistenceVerification {
    constructor (
        public userGateway: UserGateway
    ) {
        super(userGateway)
    };

    public async execute(input: GetAllMatchesInput): Promise<GetAllMatchesOutput> {
        this.verifyUserExists(input.userId);

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