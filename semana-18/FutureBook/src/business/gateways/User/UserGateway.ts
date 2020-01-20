import { User } from "../../entities/User";

export interface UserGateway {
    signUp(user: User): Promise<void>;
};