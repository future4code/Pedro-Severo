import { UserDatabase } from './../data/UserDatabase';
import { Request, Response } from 'express';
import { FollowUserInput, FollowUserUseCase } from './../business/usecases/User/FollowUserUseCase';


export async function followUserEndpoint(req: Request, res: Response) {
    try {
        const createUserInput: FollowUserInput = {
            followerUserId: req.params.followerUserId,
            followedUserId: req.body.followedUserId
        };

        const userGateway = new UserDatabase();
        const useCase = new FollowUserUseCase(userGateway);

        await useCase.execute(createUserInput);

        console.log(createUserInput)

        res.send({message: 'User followed succesfully'});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};