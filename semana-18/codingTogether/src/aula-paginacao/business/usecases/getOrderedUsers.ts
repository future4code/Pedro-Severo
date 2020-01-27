import { F4UserType } from "../entities/f4User";
import { F4GetOrderedUsersGateway } from "../gateway/f4User/f4UserGateway";

export class GetOrderedUsersUC {
  constructor(private f4GetOrderedUsersGateway: F4GetOrderedUsersGateway) {}
  async execute(
    input: GetOrderedUsersUCInput
  ): Promise<GetOrderedUsersUCOutput> {
    this.verifyOrderBy(input.orderBy);
    const orderType = this.verifyOrderType(input.orderType);
    const usersDb = await this.f4GetOrderedUsersGateway.getOrderedUsers(
      input.orderBy,
      orderType
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

  private verifyOrderBy(orderBy: string): void {
    if (orderBy !== "name" && orderBy !== "type") {
      throw new Error("O parâmetro 'orderBy' está inválido");
    }
  }

  private verifyOrderType(orderType?: string): string {
    if (!orderType) {
      return "ASC";
    }
    if (orderType !== "ASC" && orderType !== "DESC") {
      throw new Error("O parâmetro 'orderType' está inválido");
    }
    return orderType;
  }
}

export interface GetOrderedUsersUCInput {
  orderBy: string;
  orderType?: string;
}

export interface GetOrderedUsersUCOutput {
  users: GetOrderedUsersUCUser[];
}

export interface GetOrderedUsersUCUser {
  id: string;
  name: string;
  type: F4UserType;
}
