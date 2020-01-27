import { F4UserType, F4User } from "../entities/f4User";
import { F4GetUsersByTypeGateway } from "../gateway/f4User/f4UserGateway";

export class GetUsersByTypeUC {
  constructor(private f4GetUsersByTypeGateway: F4GetUsersByTypeGateway) {}

  async execute(input: GetUsersByTypeUCInput): Promise<GetUsersByTypeUCOutput> {
    const type = F4User.convertF4UserType(input.type);
    const usersDb = await this.f4GetUsersByTypeGateway.getUsersByType(type);
    return {
      users: usersDb.map(user => {
        return {
          id: user.getId(),
          name: user.getName(),
          type: user.getType()
        };
      })
    };
  }
}

export interface GetUsersByTypeUCInput {
  type: string;
}

export interface GetUsersByTypeUCOutput {
  users: GetUsersByTypeUCUser[];
}

export interface GetUsersByTypeUCUser {
  id: string;
  name: string;
  type: F4UserType;
}
