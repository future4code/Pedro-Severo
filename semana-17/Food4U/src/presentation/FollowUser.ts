import { UserDatabase } from './../data/UserDatabase';
import { Request, Response } from 'express';
import { FollowUserInput } from './../business/usecases/User/FollowUserUseCase';


export async function followUserEndpoint(req: Request, res: Response) {
    try {
        const createUserInput: FollowUserInput = {
            followerUserId: req.body.password,
            followedUserId: req.body.followeUserId
        };

        const userGateway = new UserDatabase();
        const idGenerator = new V4IdGenerator()
        const bcryptImplementation = new BcryptImplementation()
        const useCase = new CreateUserUseCase(userGateway, idGenerator, bcryptImplementation);
        const result = await useCase.execute(createUserInput);

        res.send({...result, message: 'User created succesfully'});
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    };
};