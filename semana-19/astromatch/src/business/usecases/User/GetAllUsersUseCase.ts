import { UserGateway, GetAllUsersResponse } from './../../gateways/User/UserGateway';
import { UserExistenceVerification } from './UserExistenceVerification/UserExistenceVerification';

export class GetAllUsersUseCase extends UserExistenceVerification {
  constructor(
    public userGateway: UserGateway
  ) {
    super(userGateway);
  }; 

  public async execute(input: GetAllUsersInput): Promise<GetAllUsersOutput> {
    this.verifyUserExists(input.userId);

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
