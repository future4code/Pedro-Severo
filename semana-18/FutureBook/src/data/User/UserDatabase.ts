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
};