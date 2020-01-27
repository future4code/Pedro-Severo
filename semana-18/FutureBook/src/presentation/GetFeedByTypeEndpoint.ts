import { authenticate } from './BaseFunctions/baseFunctions';
import { Request, Response } from "express";
import { FeedDatabase } from '../data/Feed/FeedDatabase';
import { GetFeedByTypeInput, GetFeedByTypeUseCase } from '../business/usecases/Feed/GetFeedByTypeUseCase';


export async function GetFeedByTypeEndpoint(req: Request, res: Response) {
    try {
        const input: GetFeedByTypeInput = {
            userId: authenticate(req),
            offset: req.body.offset,
            type: req.body.type
        };
        
        const feedGateway = new FeedDatabase();
        const useCase = new GetFeedByTypeUseCase(feedGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};