import { F4UserType, F4User } from "../entities/f4User";
import { F4GetPaginatedUsersByType } from "../gateway/f4User/f4UserGateway";

export class GetPagintatedUsersByTypeUC {
  private static USERS_BY_PAGE = 3;
  constructor(private f4GetPaginatedUsersByType: F4GetPaginatedUsersByType) {}
  async execute(
    input: GetPagintatedUsersByTypeUCInput
  ): Promise<GetPagintatedUsersByTypeUCOutput> {
    const type = F4User.convertF4UserType(input.type);

    let page = input.page;
    if (page <= 0) {
      page = 1;
    }

    const offset = GetPagintatedUsersByTypeUC.USERS_BY_PAGE * (page - 1);

    const usersDb = await this.f4GetPaginatedUsersByType.getPaginatedUsersByType(
      type,
      GetPagintatedUsersByTypeUC.USERS_BY_PAGE,
      offset
    );

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

export interface GetPagintatedUsersByTypeUCInput {
  type: string;
  page: number;
}

export interface GetPagintatedUsersByTypeUCOutput {
  users: GetPagintatedUsersByTypeUCUser[];
}

export interface GetPagintatedUsersByTypeUCUser {
  id: string;
  name: string;
  type: F4UserType;
}

/**
 *
 * LIMIT = 3
 *
 * PAGE -> 1 OFFSET -> 0 => LIMIT*(page - 1) = 3*(1-1) = 0
 * PAGE -> 2 OFFSET -> 3 => LIMIT*(page - 1) = 3*(2-1) = 3
 * PAGE -> 3 OFFSET -> 6 => LIMIT*(page - 1) = 3*(3-1) = 6
 *
 */
