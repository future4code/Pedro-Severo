import knex from "knex";

export abstract class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "jvg1015115",
      database: "aulaPaginacao"
    }
  });
}
