export class LoginUC {
    constructor(userTokenGateway, userGateway, cryptographyGateway) {
        this.userTokenGateway = userTokenGateway;
        this.userGateway = userGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.async = execute(email, string, password, string);
    }
    Promise() {
        const user = await;
        this.userGateway.getUserByEmail(email);
        const comparedPassword = await;
        this.cryptographyGateway.compare(password, user.getPassword());
        if (!comparedPassword) {
            throw new Error("Incorret password");
        }
        return {
            token: this.userTokenGateway.generateToken(user.getId().toString())
        };
    }
}
