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
const SignUpUseCase_1 = require("./../business/usecases/User/SignUpUseCase");
const UserDatabase_1 = require("../data/User/UserDatabase");
const v4IdGenerator_1 = require("../services/auth/v4IdGenerator");
const bcryptService_1 = require("../services/cryptography/bcryptService");
function SignUpEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const signUpInput = {
                name: req.body.name,
                email: req.body.email,
                photo: req.body.photo,
                birth: req.body.birth,
                password: req.body.password
            };
            const userGateway = new UserDatabase_1.UserDatabase();
            const idGenerator = new v4IdGenerator_1.V4IdGenerator();
            const bcryptService = new bcryptService_1.BcryptService();
            const useCase = new SignUpUseCase_1.SignUpUseCase(userGateway, bcryptService, idGenerator);
            const result = yield useCase.execute(signUpInput);
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
exports.SignUpEndpoint = SignUpEndpoint;
;
