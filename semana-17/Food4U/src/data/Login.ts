import { AuthenticationGateway } from './../business/gateways/authentication/authenticationGateway';
import knex from 'knex';

export class LoginDatabase implements AuthenticationGateway {
    private connection: knex;

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
    };

    // TODO: criar query que sete o token no banco de dados.
    // para isso, é necessário criar uma coluna que corresponda ao token. 

    async generateToken(userId: string) {

    };
};