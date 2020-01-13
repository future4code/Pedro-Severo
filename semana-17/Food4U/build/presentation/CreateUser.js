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
const V4IdGenerator_1 = require("./../services/V4IdGenerator");
const UserDatabase_1 = require("./../data/UserDatabase");
const CreateUserUseCase_1 = require("./../business/usecases/User/CreateUserUseCase");
function createUserEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createUserInput = {
                email: req.body.email,
                password: req.body.password
            };
            const userGateway = new UserDatabase_1.UserDatabase();
            const idGenerator = new V4IdGenerator_1.V4IdGenerator();
            const useCase = new CreateUserUseCase_1.CreateUserUseCase(userGateway, idGenerator);
            const result = yield useCase.execute(createUserInput);
            res.send(Object.assign(Object.assign({}, result), { sucess: true, message: 'User created succesfully' }));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
        ;
    });
}
exports.createUserEndpoint = createUserEndpoint;
;
