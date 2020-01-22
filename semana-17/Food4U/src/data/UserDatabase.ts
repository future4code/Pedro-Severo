import { UserGateway } from '../business/gateways/user/UserGateway';
import { User } from '../business/entities/User';
import { KnexConnection } from './knexConnection/knexConnection';

export class UserModel {
    constructor(
        public id: string,
        public email: string, 
        public password: string
    ) {};
};

export class UserEntityMapper {
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            email: entity.getEmail(),
            password: entity.getPassword()
        };
    };
};

export class UserDatabase extends KnexConnection implements UserGateway {
    private userEntityMapper: UserEntityMapper;

    constructor () {
        super();
        this.userEntityMapper = new UserEntityMapper();
    };

    async createUser(user: User) {
        await this.connection('Users_Food4U').insert(this.userEntityMapper.entityToModel(user))
    };

    async getUserByEmail(userEmail: string) {
        const results = await this.connection.raw(`
            SELECT email, id, password FROM Users_Food4U
            WHERE Users_Food4U.email="${userEmail}";
        `);

        const user = results[0][0];

        return new User(user.id, user.email, user.password);
    };

    async verifyUserExist(id: string) {
        const results = await this.connection.raw(
            `SELECT * FROM Users_Food4U
            WHERE Users_Food4U.id=${id}`
        );

        console.log(results[0][0])

        if (!results[0][0]) {
            return false
        };

        return true
    };

    async followUser(followerUserId: string, followedUserId: string) {
        const input = {
            followerUserId,
            followedUserId
        }

        console.log(input)

        await this.connection('users_relations').insert(input);
    };
};