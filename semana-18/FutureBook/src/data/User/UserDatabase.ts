import { KnexConnection } from "../KnexConnection/knexConnection"
import { UserGateway } from "../../business/gateways/User/UserGateway";
import { User } from "../../business/entities/User";

export class UserModel {
    constructor(
        public id: string,
        public name: string, 
        public email: string,
        public password: string
    ) {};
};

export class UserEntityMapper {
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            password: entity.getPassword()
        };
    };
};

export class UserDatabase extends KnexConnection implements UserGateway {
    private userEntityMapper: UserEntityMapper;
    
    constructor() {
        super();
        this.userEntityMapper = new UserEntityMapper();
    };

    public async signUp(user: User): Promise<void> {
        await this.connection("users_fbook").insert(this.userEntityMapper.entityToModel(user));
    };

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM users_fbook WHERE email='${email}';`
        );

        const user = query[0][0]

        if (!user) {
            throw new Error("User not found.");
        };

        return new User (
            user.id, 
            user.name, 
            user.email, 
            user.password
        );
    };

    public async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM users_fbook WHERE id='${id}';`
        );

        if (!query[0][0]) {
            return false
        } else {
            return true
        };
    };
};