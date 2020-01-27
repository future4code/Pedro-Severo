import { F4User } from "../entities/f4User";
import { F4GetAllUsersGateway } from "../gateway/f4User/f4UserGateway";

export class GetAllF4UsersUC {
  constructor(private f4GetAllUsersGateway: F4GetAllUsersGateway) {}

  public async execute(): Promise<GetAllF4UsersUCOutput> {
    return {
      users: await this.f4GetAllUsersGateway.getAllUsers()
    };
  }
}

export interface GetAllF4UsersUCOutput {
  users: F4User[];
}
