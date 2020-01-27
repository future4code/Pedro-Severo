import { UserGateway } from "../../gateways/user/userGateway";

export class GetAllUsersUC {
  constructor(private userGateway: UserGateway) {}

  async execute(): Promise<GetAllUsersUCOutput> {
    const users = await this.userGateway.getAllUsers();
    return {
      users: users.map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        age: user.getAge()
      }))
    };
  }
}

export interface GetAllUsersUCOutput {
  users: UsersOfGetAllUsersUCOutput[];
}

export interface UsersOfGetAllUsersUCOutput {
  id: string;
  name: string;
  email: string;
  age: number;
}
