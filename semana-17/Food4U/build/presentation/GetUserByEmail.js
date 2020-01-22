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
const UserDatabase_1 = require("./../data/UserDatabase");
const GetUserByEmail_1 = require("./../business/usecases/User/GetUserByEmail");
function getUserByEmailEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getUserByEmailInput = {
                userEmail: req.params.userEmail
            };
            const userGateway = new UserDatabase_1.UserDatabase;
            const useCase = new GetUserByEmail_1.GetUserByEmailUseCase(userGateway);
            const result = yield useCase.execute(getUserByEmailInput);
            res.send(Object.assign({}, result));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
        ;
    });
}
exports.getUserByEmailEndpoint = getUserByEmailEndpoint;
;
