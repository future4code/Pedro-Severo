import { User } from '../entities/User';

export interface UserGateway {
    createUser(user: User): Promise<void>;

    getUserByEmail(email: string): Promise<any>;
};