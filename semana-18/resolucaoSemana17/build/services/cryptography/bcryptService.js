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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
class BcryptService {
    encrypt(word) {
        return __awaiter(this, void 0, void 0, function* () {
            const generatedSalt = yield bcrypt.genSalt(BcryptService.BCRYPT_SALTS_ROUND);
            const result = yield bcrypt.hash(word, generatedSalt);
            return result;
        });
    }
    compare(word, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compare(word, hash);
        });
    }
}
exports.BcryptService = BcryptService;
BcryptService.BCRYPT_SALTS_ROUND = 10;
