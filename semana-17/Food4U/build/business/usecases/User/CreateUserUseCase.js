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
const User_1 = require("../../entities/User");
;
class CreateUserUseCase {
    constructor(userGateway, idGenerator, cryptographyGateway) {
        this.userGateway = userGateway,
            this.idGenerator = idGenerator,
            this.cryptographyGateway = cryptographyGateway;
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptPassword = yield this.cryptographyGateway.encrypt(input.password);
            const user = new User_1.User(this.idGenerator.generate(), input.email, encryptPassword);
            yield this.userGateway.createUser(user);
            return {
                id: user.getId(),
                email: user.getEmail()
            };
        });
    }
    ;
}
exports.CreateUserUseCase = CreateUserUseCase;
;
;
;
