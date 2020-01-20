import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { UserGateway } from "../../gateways/user/userGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";

export class LoginUC {
  constructor(
    private userTokenGateway: UserTokenGateway,
    private userGateway: UserGateway,
    private cryptographyGateway: CryptographyGateway
  ) {}

  async execute(email: string, password: string): Promise<LoginUCOutput> {
    const user = await this.userGateway.getUserByEmail(email);
    const comparedPassword = await this.cryptographyGateway.compare(
      password,
      user.getPassword()
    );
    if (!comparedPassword) {
      throw new Error("Incorret password");
    }
    return {
      token: this.userTokenGateway.generateToken(user.getId().toString())
    };
  }
}

interface LoginUCOutput {
  token: string;
}
