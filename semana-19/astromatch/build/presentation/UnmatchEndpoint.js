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
const UnmatchUseCase_1 = require("./../business/usecases/User/UnmatchUseCase");
const baseFunctions_1 = require("./BaseFunctions/baseFunctions");
const UserDatabase_1 = require("../data/User/UserDatabase");
function UnmatchEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const senderUserId = baseFunctions_1.authenticate(req);
            const input = {
                senderUserId,
                receptorUserId: req.body.receptorUserId
            };
            const userGateway = new UserDatabase_1.UserDatabase();
            const useCase = new UnmatchUseCase_1.UnmatchUseCase(userGateway);
            const result = yield useCase.execute(input);
            res.status(200).send(result);
        }
        catch (err) {
            res.status(400).send({
                errorMessage: err.message
            });
        }
        ;
    });
}
exports.UnmatchEndpoint = UnmatchEndpoint;
;
