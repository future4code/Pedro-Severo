import { User } from "../../entities/User";

export interface GetAllUsersResponse {
    user: User
};

export interface UserGateway {
    signUp(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExists(id: string): Promise<boolean>;
    getAllUsers(): Promise<GetAllUsersResponse[]>;
    match(senderUserId: string, receptorUserId: string): Promise<void>;
    unmatch(senderUserId: string, receptorUserId: string): Promise<void>;
};