import knex from 'knex'

export abstract class KnexConnection {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "52.22.125.22",
      user: "pedro",
      password: process.env.DATABASE_PASSWORD,
      database: "astromatch_db",
      debug: true
    }
  });
};