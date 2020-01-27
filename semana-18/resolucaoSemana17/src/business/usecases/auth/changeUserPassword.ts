import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { UserGateway } from "../../gateways/user/userGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";

export class ChangeUserPasswordUC {
  constructor(
    private userTokenGateway: UserTokenGateway,
    private userGateway: UserGateway,
    private cryptographyGateway: CryptographyGateway
  ) {}

  async execute(input: ChangeUserPasswordUCInput): Promise<ChangeUserPasswordUCOutput> {
    const userId = this.userTokenGateway.getUserIdFromToken(input.token);
    const user = await this.userGateway.getUserById(userId);
    const comparedPassword = await this.cryptographyGateway.compare(
      input.oldPassword,
      user.getPassword()
    );
    if (!comparedPassword) {
      throw new Error("Incorret password");
    }

    const encryptedNewPassword = await this.cryptographyGateway.encrypt(
      input.newPassword
    );
    await this.userGateway.updatePassword(user.getId(), encryptedNewPassword);
    return {
      token: this.userTokenGateway.generateToken(user.getId())
    };
  }
}

export interface ChangeUserPasswordUCInput {
  token: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangeUserPasswordUCOutput {
  token: string;
}
