import * as jwt from "jsonwebtoken";
import { UserTokenGateway } from "../../business/gateways/auth/userTokenGateway";

export class JwtAuthService implements UserTokenGateway {
  static EXPIRES_IN_TIME: string = "10h";

  private getJwtSecretKey(): string {
    if (!process.env.SECRET_KEY) {
      throw new Error(
        "Missing JWT secret key."
      );
    };
    return process.env.SECRET_KEY;
  };

  generateToken(userId: string): string {
    const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
      expiresIn: JwtAuthService.EXPIRES_IN_TIME
    });

    return token;
  };

  getUserIdFromToken(token: string): string {
    const jwtVerifiedResult = jwt.verify(token, this.getJwtSecretKey()) as {
      userId: string;
    };
    return jwtVerifiedResult["userId"];
  };
}
