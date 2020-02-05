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
const simulateDemandInteractor_1 = require("./../business/useCases/simulateDemand/simulateDemandInteractor");
function simulateDemandEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createDemandInput = {
                pictureSize: req.body.pictureSize,
                paperType: req.body.paperType,
                frameType: req.body.frameType,
                borderHight: req.body.borderHight,
                color: req.body.color,
            };
            const useCase = new simulateDemandInteractor_1.SimulateDemandInteractor();
            const result = yield useCase.execute(createDemandInput);
            res.send(formatNumberForUi(result.impressionPrice, result.framePrice, result.finalPrice));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
        ;
    });
}
exports.simulateDemandEndpoint = simulateDemandEndpoint;
;
function formatNumberForUi(impressionPrice, framePrice, finalPrice) {
    return `
        Peço de impressão: R$ ${impressionPrice.toFixed(2)}
        Preço da moldura: R$ ${framePrice.toFixed(2)}
        Preço final: R$ ${finalPrice.toFixed(2)}
    `;
}
;
