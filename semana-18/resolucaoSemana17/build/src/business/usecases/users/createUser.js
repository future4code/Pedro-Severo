import { User } from "../../entities/User";
export class CreateUserUC {
    constructor(userGateway, cryptographyGateway, idGenerator) {
        this.userGateway = userGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.idGenerator = idGenerator;
        this.async = execute(input, CreateUserUCInput);
    }
    Promise() {
        const encryptedPassword = await;
        this.cryptographyGateway.encrypt(input.password);
        const user = new User(this.idGenerator.generateId(), input.name, input.email, input.age, encryptedPassword);
        try {
            await;
            this.userGateway.createUser(user);
        }
        catch (err) {
            console.log(err);
            throw new Error("An error ocurred");
        }
        return {
            message: "User created successfully"
        };
    }
}
