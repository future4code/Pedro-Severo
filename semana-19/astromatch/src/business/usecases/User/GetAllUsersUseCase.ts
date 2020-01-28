import { UserGateway, GetAllUsersResponse } from './../../gateways/User/UserGateway';

export class GetAllUsersUseCase {
  constructor(private userGateway: UserGateway) {};

  async verifyUserExists(input: GetAllUsersInput) {
      const userId = this.userGateway.verifyUserExists(input.userId);
  
      if (!userId) {
          throw new Error("You need be logged to make a friend.");
      };
  };   

  public async execute(input: GetAllUsersInput): Promise<GetAllUsersOutput> {
    this.verifyUserExists(input);

    return {
      users: await this.userGateway.getAllUsers()
    };
  };
};

export interface GetAllUsersInput {
    userId: string
};

export interface GetAllUsersOutput {
  users: GetAllUsersResponse[];
};
