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
class SignUpUseCase {
    constructor(userGateway, cryptographyGateway, idGenerator) {
        this.userGateway = userGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.idGenerator = idGenerator;
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, photo, birth, password } = input;
            const encryptedPassword = yield this.cryptographyGateway.encrypt(password);
            const birthDate = new Date(birth);
            const user = new User_1.User(this.idGenerator.generateId(), name, email, photo, birthDate, encryptedPassword);
            try {
                yield this.userGateway.signUp(user);
            }
            catch (err) {
                throw new Error("It wasn't possible to create user.");
            }
            ;
            return {
                message: "SignUp done successfully"
            };
        });
    }
    ;
}
exports.SignUpUseCase = SignUpUseCase;
;
;
;
