import knex from "knex";

export class DatabaseManager {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "jvg1015115",
      database: "aulaPaginacao"
    }
  });

  public async createF4UsersTable(): Promise<void> {
    await this.connection.raw(
      `CREATE TABLE F4Users(
        id varchar(255) PRIMARY KEY, 
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL UNIQUE,
        password varchar(255) NOT NULL,
        type varchar(255) NOT NULL
      )`
    );
  }

  public async dropTableF4Users(): Promise<void> {
    await this.connection.raw("DROP TABLE F4Users");
  }
}
