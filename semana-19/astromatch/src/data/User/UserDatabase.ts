import { KnexConnection } from "../KnexConnection/knexConnection"
import { UserGateway, GetAllUsersResponse } from "../../business/gateways/User/UserGateway";
import { User } from "../../business/entities/User";

export class UserModel {
    constructor(
        public id: string,
        public name: string, 
        public email: string,
        public photo: string,
        public birth: Date,
        public password: string
    ) {};
};

export class UserEntityMapper {
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            photo: entity.getPhoto(),
            birth: entity.getBirth(),
            password: entity.getPassword()
        };
    };
};

interface GetAllUsersModel {
    id: string,
    name: string,
    email: string,
    photo: string,
    birth: Date,
    password: string,
};

export class UserDatabase extends KnexConnection implements UserGateway {
    private userEntityMapper: UserEntityMapper;
    
    constructor() {
        super();
        this.userEntityMapper = new UserEntityMapper();
    };

    public async signUp(user: User): Promise<void> {
        await this.connection("users").insert(this.userEntityMapper.entityToModel(user));
    };

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM users WHERE email='${email}';`
        );

        const user = query[0][0]

        if (!user) {
            throw new Error("User not found.");
        };

        return new User (
            user.id, 
            user.name, 
            user.email,
            user.photo,
            user.birth, 
            user.password
        );
    };

    public async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM users WHERE id='${id}';`
        );

        if (!query[0][0]) {
            return false
        } else {
            return true
        };
    };

    public async getAllUsers(): Promise<GetAllUsersResponse[]> {
        const allUsers = await this.connection.raw(
            `SELECT * FROM users`
        );

        const usersFromDataBase: GetAllUsersModel[] = allUsers[0]

        return usersFromDataBase.map(user => ({
            user: new User(user.id, user.name, user.email, user.photo, user.birth, user.password)
        }));
    };

    public async match(senderUserId: string, receptorUserId: string): Promise<void> {
        const halfMatchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM half_match
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );

        const bothMatchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM both_match 
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            WHERE (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );

        if (!halfMatchExistenceVerification[0][0]) {
            await this.connection.raw(
                `
                INSERT INTO half_match (sender_id, receptor_id)
                VALUES ("${senderUserId}", "${receptorUserId}");
                `
            );

            return  
        } else { 
            if (bothMatchExistenceVerification[0][0]) {
                throw new Error ("You already be matched with this user.");
            } else {       
                await this.connection.raw(
                    `
                    INSERT INTO both_match (sender_id, receptor_id)
                    VALUES ("${senderUserId}", "${receptorUserId}");
                    `
                );
            };
        };
    };

    public async unmatch(senderUserId: string, receptorUserId: string): Promise<void> {
        const halfMatchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM half_match
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );
        
        const bothMatchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM both_match 
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
            OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
            `
        );


        if (!halfMatchExistenceVerification[0][0]) {
            throw new Error ("You and this user aren't matched.");
        } else { 
            if (bothMatchExistenceVerification[0][0] && halfMatchExistenceVerification[0][0]) {
                await this.connection.raw(
                    `
                    DELETE FROM half_match
                    WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
                    OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
                    `
                );
                
                await this.connection.raw(
                    `
                    DELETE FROM both_match
                    WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
                    OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
                    `
                );
            } else if (halfMatchExistenceVerification[0][0]) {       
                await this.connection.raw(
                    `
                    DELETE FROM half_match
                    WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}')
                    OR (sender_id='${receptorUserId}' AND receptor_id='${senderUserId}');
                    `
                );
            };
        };
    };

    // public async getUserById(id: string): Promise<User> {
    //     const query = await this.connection.raw(
    //         `SELECT * FROM users_fbook WHERE id='${id}';`
    //     );

    //     const user = query[0][0]

    //     if (!user) {
    //         throw new Error("User not found.");
    //     };

    //     return new User (
    //         user.id, 
    //         user.name, 
    //         user.email, 
    //         user.password
    //     );
    // };
};