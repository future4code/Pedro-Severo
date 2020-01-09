import { User } from "../entities/user";

export interface UserGateway {
  getUser(id: string): Promise<User>;
}
