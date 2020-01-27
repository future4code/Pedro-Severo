import { authenticate } from './BaseFunctions/baseFunctions';
import { Request, Response } from "express";
import { GetFeedInput, GetFeedUseCase } from "../business/usecases/Feed/GetFeedUseCase";
import { FeedDatabase } from '../data/Feed/FeedDatabase';


export async function GetFeedEndpoint(req: Request, res: Response) {
    try {
        const input: GetFeedInput = {
            userId: authenticate(req),
            offset: req.body.offset
        };
        
        const feedGateway = new FeedDatabase();
        const useCase = new GetFeedUseCase(feedGateway);

        const result = await useCase.execute(input);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
}