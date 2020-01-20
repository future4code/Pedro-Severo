import { F4CreateUserGateway } from "../gateway/f4User/f4UserGateway";
import { EncryptGateway } from "../gateway/cryptography/encryptGateway";
import { F4User, F4UserType } from "../entities/f4User";
import { IdGeneratorGateway } from "../gateway/idGenerator/idGeneratorGateway";

export class CreateF4UserUC {
  constructor(
    private f4CreateUserGateway: F4CreateUserGateway,
    private encryptGateway: EncryptGateway,
    private idGeneratorGateway: IdGeneratorGateway
  ) {}

  public async execute(
    input: CreateF4UserUCInput
  ): Promise<CreateF4UserUCOutput> {
    const encryptedPassword = await this.encryptGateway.encrypt(input.password);
    const newUser = new F4User(
      this.idGeneratorGateway.generateId(),
      input.name,
      input.email,
      encryptedPassword,
      F4User.convertF4UserType(input.type)
    );
    await this.f4CreateUserGateway.createUser(newUser);

    return {
      message: "Usuário criado com sucesso"
    };
  }
}

export interface CreateF4UserUCInput {
  name: string;
  email: string;
  password: string;
  type: string;
}

export interface CreateF4UserUCOutput {
  message: string;
}
