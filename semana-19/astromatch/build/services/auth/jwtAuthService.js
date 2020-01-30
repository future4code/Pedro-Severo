"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class JwtAuthService {
    getJwtSecretKey() {
        if (!process.env.SECRET_KEY) {
            throw new Error("Missing JWT secret key.");
        }
        ;
        return process.env.SECRET_KEY;
    }
    ;
    generateToken(userId) {
        const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
            expiresIn: JwtAuthService.EXPIRES_IN_TIME
        });
        return token;
    }
    ;
    getUserIdFromToken(token) {
        const jwtVerifiedResult = jwt.verify(token, this.getJwtSecretKey());
        return jwtVerifiedResult["userId"];
    }
    ;
}
exports.JwtAuthService = JwtAuthService;
JwtAuthService.EXPIRES_IN_TIME = "10h";
;
