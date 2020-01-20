export class GetAllUsersUC {
    constructor(userGateway) {
        this.userGateway = userGateway;
        this.async = execute();
    }
    Promise() {
        const users = await;
        this.userGateway.getAllUsers();
        return {
            users: users.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                age: user.getAge()
            }))
        };
    }
}
