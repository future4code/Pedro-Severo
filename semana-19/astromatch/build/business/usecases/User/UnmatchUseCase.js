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
class UnmatchUseCase {
    constructor(userGateway) {
        this.userGateway = userGateway;
    }
    ;
    verifyUserExists(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const senderUserId = yield this.userGateway.verifyUserExists(input.senderUserId);
            const receptorUserId = yield this.userGateway.verifyUserExists(input.receptorUserId);
            if (!senderUserId) {
                throw new Error("You need be logged to unmatch.");
            }
            ;
            if (!receptorUserId) {
                throw new Error("This user doesn't exist.");
            }
            ;
        });
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyUserExists(input);
            try {
                yield this.userGateway.unmatch(input.senderUserId, input.receptorUserId);
            }
            catch (err) {
                throw new Error("It wasn't possible unmatched.");
            }
            ;
            return {
                message: "Match successfully!"
            };
        });
    }
    ;
}
exports.UnmatchUseCase = UnmatchUseCase;
;
;
