"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Demand_1 = require("../../entities/Demand");
const generateRandomId_1 = require("../../utils/generateRandomId");
class SimulateDemandInteractor {
    execute(createDemandInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDemand = new Demand_1.Demand(generateRandomId_1.generateRandomId(), createDemandInput.pictureSize, createDemandInput.paperType, createDemandInput.frameType, createDemandInput.borderHight, createDemandInput.color);
            return {
                impressionPrice: newDemand.calculateImpressionPrice(),
                framePrice: newDemand.calculateFramePrice(),
                finalPrice: newDemand.calculateFinalPrice()
            };
        });
    }
    ;
}
exports.SimulateDemandInteractor = SimulateDemandInteractor;
;
;
;
