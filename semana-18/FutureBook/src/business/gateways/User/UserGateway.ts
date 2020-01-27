import { User } from "../../entities/User";

export interface UserGateway {
    signUp(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExists(id: string): Promise<boolean>;
    makeFriendship(senderUserId: string, receptorUserId: string): Promise<void>;
    unmakeFriendship(senderUserId: string, receptorUserId:string): Promise<void>;
    getUserById(id: string): Promise<User>;
};