"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const knexConnection_1 = require("../KnexConnection/knexConnection");
const User_1 = require("../../business/entities/User");
class UserModel {
    constructor(id, name, email, photo, birth, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.photo = photo;
        this.birth = birth;
        this.password = password;
    }
    ;
}
exports.UserModel = UserModel;
;
class UserEntityMapper {
    entityToModel(entity) {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            photo: entity.getPhoto(),
            birth: entity.getBirth(),
            password: entity.getPassword()
        };
    }
    ;
}
exports.UserEntityMapper = UserEntityMapper;
;
;
;
class UserDatabase extends knexConnection_1.KnexConnection {
    constructor() {
        super();
        this.userEntityMapper = new UserEntityMapper();
    }
    ;
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection("users").insert(this.userEntityMapper.entityToModel(user));
        });
    }
    ;
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM users WHERE email='${email}';`);
            const user = query[0][0];
            if (!user) {
                throw new Error("User not found.");
            }
            ;
            return new User_1.User(user.id, user.name, user.email, user.photo, user.birth, user.password);
        });
    }
    ;
    verifyUserExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM users WHERE id='${id}';`);
            if (!query[0][0]) {
                return false;
            }
            else {
                return true;
            }
            ;
        });
    }
    ;
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.connection.raw(`SELECT * FROM users`);
            const usersFromDataBase = allUsers[0];
            return usersFromDataBase.map(user => ({
                user: new User_1.User(user.id, user.name, user.email, user.photo, user.birth, user.password)
            }));
        });
    }
    ;
    match(senderUserId, receptorUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchExistenceVerification = yield this.connection.raw(`
            SELECT * FROM matches
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
            `);
            if (!matchExistenceVerification[0][0]) {
                yield this.connection.raw(`
                INSERT INTO matches (sender_id, receptor_id)
                VALUES ("${senderUserId}", "${receptorUserId}");
                `);
            }
            else {
                throw new Error("You already be matched with this user.");
            }
            ;
        });
    }
    ;
    unmatch(senderUserId, receptorUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchExistenceVerification = yield this.connection.raw(`
            SELECT * FROM matches
            WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
            `);
            if (matchExistenceVerification[0][0]) {
                yield this.connection.raw(`
                DELETE FROM matches
                WHERE (sender_id='${senderUserId}' AND receptor_id='${receptorUserId}');
                `);
            }
            else {
                throw new Error("You and this user aren't matched.");
            }
            ;
        });
    }
    ;
    getAllMatches(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`
            SELECT DISTINCT id, name, email, photo, birth 
            FROM users u
            JOIN matches m
            ON ((m.sender_id=u.id) AND (m.receptor_id='${id}')) 
            OR ((m.sender_id='${id}') AND (m.receptor_id='u.id'));
            `);
            const matchesFromDataBase = query[0];
            return matchesFromDataBase.map(match => ({
                match: new User_1.User(match.id, match.name, match.email, match.photo, match.birth, match.password)
            }));
        });
    }
    ;
}
exports.UserDatabase = UserDatabase;
;
