import { UserGateway } from "../../gateways/User/UserGateway";
import { CryptographyGateway } from "../../gateways/Cryptography/CryptographyGateway";

export class ChangePasswordUseCase {
    constructor (
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
    ) {};

    async execute(input: ChangePasswordInput): Promise<ChangePasswordOutput> {
        const user = await this.userGateway.getUserByEmail(input.email)
        const comparedPassword = await this.cryptographyGateway.compare(
            input.oldPassword,
            user.getPassword()
        );

        if (!comparedPassword) {
            throw new Error("Email or password are incorrect.");
        };

        this.userGateway.changePassword(input.oldPassword, input.newPassword);

        return {
            message: "Password changed successfully!"
        };
    };
};

export interface ChangePasswordInput {
    email: string,
    newPassword: string, 
    oldPassword: string
};

export interface ChangePasswordOutput {
    message: string
};