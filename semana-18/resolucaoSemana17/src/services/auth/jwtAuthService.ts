import { UserTokenGateway } from "../../business/gateways/auth/userTokenGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthService implements UserTokenGateway {
  static SECRET_KEY: string = "JWT_SECRET";
  static EXPIRES_IN_TIME: string = "10h";
  private getJwtSecretKey(): string {
    if (!process.env[JwtAuthService.SECRET_KEY]) {
      throw new Error(
        "Jwt secret key not found. Maybe have you forgotten to export it."
      );
    }
    return process.env[JwtAuthService.SECRET_KEY]!;
  }

  generateToken(userId: string): string {
    const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
      expiresIn: JwtAuthService.EXPIRES_IN_TIME
    });

    return token;
  }

  getUserIdFromToken(token: string): string {
    const jwtVerifiedResult = jwt.verify(token, this.getJwtSecretKey()) as {
      userId: string;
    };
    return jwtVerifiedResult["userId"];
  }
}
