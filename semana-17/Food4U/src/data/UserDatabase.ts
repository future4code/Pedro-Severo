import { UserGateway } from './../business/gateways/UserGateway';
import { User } from '../business/entities/User';
import knex from 'knex';

class UserModel {
    constructor(
        public id: string,
        public email: string, 
        public password: string
    ) {};
};

class UserEntityMapper {
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
        // await this.connection.raw(`
        //     INSERT INTO users (email, password, id)
        //     VALUES (${user.getEmail()}, ${user.getPassword()}, ${user.getId()})
        // `)

        await this.connection('Users_Food4U').insert(this.userEntityMapper.entityToModel(user))
    };
};