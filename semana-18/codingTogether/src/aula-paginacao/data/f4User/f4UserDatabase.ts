import {
  F4CreateUserGateway,
  F4GetAllUsersGateway,
  F4GetUsersByTypeGateway,
  F4GetOrderedUsersGateway,
  F4GetPaginatedUsersByType
} from "../../business/gateway/f4User/f4UserGateway";
import { F4User } from "../../business/entities/f4User";
import { BaseDatabase } from "../base/baseDatabase";

export class F4UserDatabase extends BaseDatabase
  implements
    F4CreateUserGateway,
    F4GetAllUsersGateway,
    F4GetUsersByTypeGateway,
    F4GetOrderedUsersGateway,
    F4GetPaginatedUsersByType {
  private static TABLE_NAME: string = "F4Users";

  public async createUser(user: F4User): Promise<void> {
    await this.connection.raw(
      `INSERT INTO 
				${F4UserDatabase.TABLE_NAME} (id, name, email, password, type) 
			VALUES(
				"${user.getId()}",
				"${user.getName()}",
				"${user.getEmail()}",
				"${user.getPassword()}",
        "${user.getType()}"
    
			)`
    );
  }

  public async getAllUsers(): Promise<F4User[]> {
    const allUsers = await this.connection.raw(
      `SELECT * FROM ${F4UserDatabase.TABLE_NAME}`
    );
    return allUsers[0].map(this.dbModelToUser);
  }

  public async getUsersByType(type: string): Promise<F4User[]> {
    const users = await this.connection.raw(
      `SELECT * FROM ${F4UserDatabase.TABLE_NAME} WHERE type='${type}'`
    );
    return users[0].map(this.dbModelToUser);
  }

  public async getOrderedUsers(
    orderBy: string,
    orderType: string
  ): Promise<F4User[]> {
    const users = await this.connection.raw(
      `SELECT * FROM ${F4UserDatabase.TABLE_NAME} ORDER BY ${orderBy} ${orderType}`
    );
    return users[0].map(this.dbModelToUser);
  }

  public async getPaginatedUsersByType(
    type: string,
    limit: number,
    offset: number
  ): Promise<F4User[]> {
    const users = await this.connection.raw(
      `SELECT * FROM ${F4UserDatabase.TABLE_NAME} WHERE type='${type}' LIMIT ${limit} OFFSET ${offset}`
    );
    return users[0].map(this.dbModelToUser);
  }

  private dbModelToUser(dbModel: any): F4User {
    return new F4User(
      dbModel.id,
      dbModel.name,
      dbModel.email,
      dbModel.password,
      F4User.convertF4UserType(dbModel.type)
    );
  }
}
