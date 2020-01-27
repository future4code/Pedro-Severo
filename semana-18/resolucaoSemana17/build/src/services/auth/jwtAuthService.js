import * as jwt from "jsonwebtoken";
export class JwtAuthService {
    getJwtSecretKey() {
        if (!process.env[JwtAuthService.SECRET_KEY]) {
            throw new Error("Jwt secret key not found. Maybe have you forgotten to export it.");
        }
        return process.env[JwtAuthService.SECRET_KEY];
        !;
    }
    generateToken(userId) {
        const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
            expiresIn: JwtAuthService.EXPIRES_IN_TIME
        });
        return token;
    }
    getUserIdFromToken(token) {
        const jwtVerifiedResult = jwt.verify(token, this.getJwtSecretKey()), as = {
            userId: string
        };
        return jwtVerifiedResult["userId"];
    }
}
JwtAuthService.SECRET_KEY = "JWT_SECRET";
JwtAuthService.EXPIRES_IN_TIME = "10h";
