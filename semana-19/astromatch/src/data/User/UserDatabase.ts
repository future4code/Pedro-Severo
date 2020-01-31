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

interface GetAllMatchesModel {
    id: string,
    name: string,
    email: string,
    photo: string,
    birth: Date,
    password: string,
};

export class UserDatabase extends KnexConnection implements UserGateway {
    private userEntityMapper: UserEntityMapper;
    private usersTableName: string;
    private matchesTableName: string

    
    constructor () {
        super();
        this.userEntityMapper = new UserEntityMapper();
        this.usersTableName = "users";
        this.matchesTableName = "matches";
    };

    public async signUp(user: User): Promise<void> {
        await this.connection(this.usersTableName).insert(this.userEntityMapper.entityToModel(user));
    };

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM ${this.usersTableName} WHERE email='${email}';`
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
            `SELECT * FROM ${this.usersTableName} WHERE id='${id}';`
        );

        if (!query[0][0]) {
            return false
        } else {
            return true
        };
    };

    public async getAllUsers(): Promise<GetAllUsersResponse[]> {
        const allUsers = await this.connection.raw(
            `SELECT * FROM ${this.usersTableName}`
        );

        const usersFromDataBase: GetAllUsersModel[] = allUsers[0]

        return usersFromDataBase.map(user => ({
            user: new User(user.id, user.name, user.email, user.photo, user.birth, user.password)
        }));
    };

    public async match(senderUserId: string, receptorUserId: string): Promise<void> {
        const matchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM ${this.matchesTableName}
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
            `
        );

        if (!matchExistenceVerification[0][0]) {
            await this.connection.raw(
                `
                INSERT INTO ${this.matchesTableName} (sender_id, receptor_id)
                VALUES ("${senderUserId}", "${receptorUserId}");
                `
            ); 
        } else { 
            throw new Error ("You already be matched with this user.");
        };
    };

    public async unmatch(senderUserId: string, receptorUserId: string): Promise<void> {
        const matchExistenceVerification = await this.connection.raw(
            `
            SELECT * FROM ${this.matchesTableName}
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
            `
        );
        
        if (matchExistenceVerification[0][0]) {
            await this.connection.raw(
                `
                DELETE FROM ${this.matchesTableName}
                WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
                `
            );
        } else {
            throw new Error ("You and this user aren't matched.");
        };
    };

    public async getAllMatches(id: string): Promise<any> {
        const query = await this.connection.raw(
            `
            SELECT DISTINCT id, name, email, photo, birth 
            FROM ${this.usersTableName} u
            JOIN ${this.matchesTableName} m
            ON ((m.sender_id=u.id) AND (m.receptor_id='${id}')) 
            OR ((m.sender_id='${id}') AND (m.receptor_id=u.id));
            `
        );

        const matchesFromDataBase: GetAllMatchesModel[] = query[0]

        return matchesFromDataBase.map(match => ({
            match: new User(match.id, match.name, match.email, match.photo, match.birth, match.password)
        }));
    };

    public async changePassword(oldPassword: string, newPassword: string): Promise<any> {
        await this.connection.raw(
            `
            UPDATE ${this.usersTableName} 
            SET senha='${newPassword}'  
            WHERE senha='${oldPassword}';
            `
        );
    };
};