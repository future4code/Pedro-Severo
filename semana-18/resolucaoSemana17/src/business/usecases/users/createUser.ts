import { UserGateway } from "../../gateways/user/userGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";
import { User } from "../../entities/User";
import {IdGeneratorGateway} from '../../gateways/auth/idGenerator'

export class CreateUserUC {
  constructor(
    private userGateway: UserGateway,
    private cryptographyGateway: CryptographyGateway,
    private idGenerator: IdGeneratorGateway
  ) {}

  async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
    const encryptedPassword = await this.cryptographyGateway.encrypt(
      input.password
    );
    const user = new User(
      this.idGenerator.generateId(),
      input.name,
      input.email,
      input.age,
      encryptedPassword
    );
    try {
      await this.userGateway.createUser(user);
    } catch (err) {
      console.log(err)
      throw new Error("An error ocurred");
    }
    return {
      message: "User created successfully"
    };
  }
}

export interface CreateUserUCInput {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface CreateUserUCOutput {
  message: string;
}
