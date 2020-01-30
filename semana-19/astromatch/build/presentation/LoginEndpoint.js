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
const LoginUseCase_1 = require("../business/usecases/User/LoginUseCase");
const UserDatabase_1 = require("../data/User/UserDatabase");
const bcryptService_1 = require("../services/cryptography/bcryptService");
const jwtAuthService_1 = require("../services/auth/jwtAuthService");
function LoginEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loginInput = {
                email: req.body.email,
                password: req.body.password
            };
            const userGateway = new UserDatabase_1.UserDatabase();
            const cryptographyGateway = new bcryptService_1.BcryptService();
            const userTokenGateway = new jwtAuthService_1.JwtAuthService();
            const useCase = new LoginUseCase_1.LoginUseCase(userGateway, cryptographyGateway, userTokenGateway);
            const result = yield useCase.execute(loginInput);
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
exports.LoginEndpoint = LoginEndpoint;
;
