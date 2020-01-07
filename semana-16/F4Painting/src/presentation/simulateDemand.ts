import {Request, Response} from 'express';
import { SimulateDemandInteractor, CreateDemandInput } from './../business/useCases/simulateDemand/simulateDemandInteractor';


export async function simulateDemandEndpoint(req: Request, res: Response) {
    try {
        const createDemandInput: CreateDemandInput = {
            pictureSize: req.body.pictureSize,
            paperType: req.body.paperType,
            frameType: req.body.frameType,
            borderHight: req.body.borderHight,
            color: req.body.color,
        };

        const useCase = new SimulateDemandInteractor()

        const result = await useCase.execute(createDemandInput);

        res.send(
            formatNumberForUi(result.impressionPrice, result.framePrice, result.finalPrice)
        );
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    };
};

function formatNumberForUi (impressionPrice: number, framePrice: number, finalPrice: number): string {
    return `
        Peço de impressão: R$ ${impressionPrice.toFixed(2)}
        Preço da moldura: R$ ${framePrice.toFixed(2)}
        Preço final: R$ ${finalPrice.toFixed(2)}
    `
};