import { UserGateway } from './../../gateways/user/UserGateway';


export class FollowUserUseCase {
    constructor(private userGateway: UserGateway) {};

    async verifyUserExist(userId: string) {
        const verifyUser = this.userGateway.verifyUserExist(userId);

        if (!verifyUser) {
            throw new Error ("This user doesn't exist.")
        };
    };

    async execute (input: FollowUserInput) {
        await Promise.all([
            this.verifyUserExist(input.followedUserId),
            this.verifyUserExist(input.followerUserId)
        ]);
        
        this.userGateway.followUser(input.followerUserId, input.followedUserId);
    };
};

export interface FollowUserInput {
    followerUserId: string, 
    followedUserId: string 
};