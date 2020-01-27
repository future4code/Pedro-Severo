export class ChangeUserPasswordUC {
    constructor(userTokenGateway, userGateway, cryptographyGateway) {
        this.userTokenGateway = userTokenGateway;
        this.userGateway = userGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.async = execute(input, ChangeUserPasswordUCInput);
    }
    Promise() {
        const userId = this.userTokenGateway.getUserIdFromToken(input.token);
        const user = await;
        this.userGateway.getUserById(userId);
        const comparedPassword = await;
        this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
        if (!comparedPassword) {
            throw new Error("Incorret password");
        }
        const encryptedNewPassword = await;
        this.cryptographyGateway.encrypt(input.newPassword);
        await;
        this.userGateway.updatePassword(user.getId(), encryptedNewPassword);
        return {
            token: this.userTokenGateway.generateToken(user.getId())
        };
    }
}
