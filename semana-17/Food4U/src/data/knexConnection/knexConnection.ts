import knex from 'knex';

export abstract class KnexConnection {
    protected connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'pedro',
            password: process.env.SENHA_DATABASE,
            database: 'pedro'
        }
    });
};