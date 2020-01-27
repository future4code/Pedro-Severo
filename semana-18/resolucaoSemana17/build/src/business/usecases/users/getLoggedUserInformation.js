export class GetLoggedUserInformationUC {
    constructor(userTokenGateway, userGateway) {
        this.userTokenGateway = userTokenGateway;
        this.userGateway = userGateway;
        this.async = execute(token, string);
    }
    Promise() {
        const userId = this.userTokenGateway.getUserIdFromToken(token);
        const user = await;
        this.userGateway.getUserById(userId);
        return {
            id: user.getId(),
            name: user.getName(),
            age: user.getAge(),
            email: user.getEmail()
        };
    }
}
