import knex from 'knex'

export abstract class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "teste",
      database: "aulas_feed",
      debug: true
    }
  });

  getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]
}
