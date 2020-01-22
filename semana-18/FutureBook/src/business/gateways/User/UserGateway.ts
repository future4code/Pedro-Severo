import { User } from "../../entities/User";

export interface UserGateway {
    signUp(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExists(id: string): Promise<boolean>;
    makeFriends(senderUserId: string, receptorUserId: string): Promise<void>;
    unmakeFriendship(senderUserId: string, receptorUserId:string): Promise<void>;
};