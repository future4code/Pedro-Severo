import { Demand, PictureSize, PaperType, FrameType, BorderHight, Color  } from '../../entities/Demand';
import { generateRandomId } from '../../utils/generateRandomId';

export class SimulateDemandInteractor {
    async execute(createDemandInput: CreateDemandInput): Promise<CreateDemandOutput> {
        const newDemand = new Demand(
            generateRandomId(),
            createDemandInput.pictureSize,
            createDemandInput.paperType,
            createDemandInput.frameType,
            createDemandInput.borderHight,
            createDemandInput.color
        );

        return {
            impressionPrice: newDemand.calculateImpressionPrice(),
            framePrice: newDemand.calculateFramePrice(),
            finalPrice: newDemand.calculateFinalPrice()
        }; 
    };

};

export interface CreateDemandInput {
    pictureSize: PictureSize,
    paperType: PaperType,
    frameType: FrameType,
    borderHight: BorderHight,
    color: Color,
};

export interface CreateDemandOutput {
    impressionPrice: number,
    framePrice: number,
    finalPrice: number
};