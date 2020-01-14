import { UserGateway } from './../business/gateways/UserGateway';
import { User } from '../business/entities/User';
import knex from 'knex';

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

export class UserDatabase implements UserGateway {
    private connection: knex;
    private userEntityMapper: UserEntityMapper;

    constructor () {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'pedro',
                password: process.env.SENHA_DATABASE,
                database: 'pedro'
            }
        });

        this.userEntityMapper = new UserEntityMapper()
    };

    async createUser(user: User) {
        await this.connection('Users_Food4U').insert(this.userEntityMapper.entityToModel(user))
    };

    async getUserByEmail(userEmail: string) {
        const results = await this.connection.raw(`
            SELECT email, id, password FROM Users_Food4U
            WHERE Users_Food4U.email="${userEmail}";
        `);

        return results[0][0]
    };
};