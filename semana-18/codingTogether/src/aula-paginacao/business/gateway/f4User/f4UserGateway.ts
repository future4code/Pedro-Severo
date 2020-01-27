import { F4User } from "../../entities/f4User";

export interface F4CreateUserGateway {
  createUser(user: F4User): Promise<void>;
}

export interface F4GetAllUsersGateway {
  getAllUsers(): Promise<F4User[]>;
}

export interface F4GetUsersByTypeGateway {
  getUsersByType(type: string): Promise<F4User[]>;
}

export interface F4GetOrderedUsersGateway {
  getOrderedUsers(orderBy: string, orderType: string): Promise<F4User[]>;
}

export interface F4GetPaginatedUsersByType {
  getPaginatedUsersByType(
    type: string,
    limit: number,
    offset: number
  ): Promise<F4User[]>;
}
