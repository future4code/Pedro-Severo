import { KnexConnection } from "../KnexConnection/knexConnection"
import { UserGateway } from "../../business/gateways/User/UserGateway";
import { User } from "../../business/entities/User";

export class UserModel {
    constructor(
        public id: string,
        public name: string, 
        public email: string,
        public password: string
    ) {};
};

export class UserEntityMapper {
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            password: entity.getPassword()
        };
    };
};

export class UserDatabase extends KnexConnection implements UserGateway {
    private userEntityMapper: UserEntityMapper;
    
    constructor() {
        super();
        this.userEntityMapper = new UserEntityMapper();
    };

    public async signUp(user: User): Promise<void> {
        await this.connection("users_fbook").insert(this.userEntityMapper.entityToModel(user));
    };

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM users_fbook WHERE email='${email}';`
        );

        const user = query[0][0]

        if (!user) {
            throw new Error("User not found.");
        };

        return new User (
            user.id, 
            user.name, 
            user.email, 
            user.password
        );
    };

    public async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM users_fbook WHERE id='${id}';`
        );

        if (!query[0][0]) {
            return false
        } else {
            return true
        };
    };

    public async makeFriends(senderUserId: string, receptorUserId: string): Promise<void> {
        const friendishipExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM friendships 
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );

        if (friendishipExistenceVerification[0][0]) {
            throw new Error ("You already be friends.")
        } else {        
            await this.connection.raw(
                `
                INSERT INTO friendships (sender_id, receptor_id)
                VALUES ("${senderUserId}", "${receptorUserId}");
                `
            );
        };
    };

    public async unmakeFriendship(senderUserId: string, receptorUserId: string): Promise<void> {
        const friendishipExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM friendships 
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );

        if (!friendishipExistenceVerification[0][0]) {
            throw new Error ("You aren't friends.")
        } else {        
            await this.connection.raw(
                `
                DELETE FROM friendships
                WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
                OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
                `
            );
        };
    };
};