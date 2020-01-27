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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../business/entities/User");
const knex_1 = __importDefault(require("knex"));
class UserDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "localhost",
                user: "root",
                password: "jvg1015115",
                database: "aulaJwt"
            }
        });
    }
    createUserTable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`DROP TABLE Users`);
            yield this.connection.raw(`CREATE TABLE Users(
      id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      email varchar(255) NOT NULL UNIQUE,
      age int NOT NULL,
      password varchar(255) NOT NULL
      )`);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM Users WHERE id='${parseInt(id)}';`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("User not found");
            }
            return new User_1.User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM Users WHERE email='${email}';`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("User not found");
            }
            return new User_1.User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.connection.raw("SELECT * FROM Users;");
            const usersFromDb = yield query;
            return usersFromDb[0].map((user) => new User_1.User(user.id, user.name, user.email, user.age, user.password));
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection
                    .insert({
                    name: user.getName(),
                    age: user.getAge(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
                    .into("Users");
            }
            catch (err) {
                if (err.message.indexOf("duplicate")) {
                    throw new Error("Usuário já existe");
                }
            }
        });
    }
    updatePassword(id, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`UPDATE Users SET password='${newPassword}' WHERE id=${id};`);
        });
    }
    alterTable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`ALTER TABLE Users ADD birthdate DATE DEFAULT '1900-01-01'`);
        });
    }
}
exports.UserDatabase = UserDatabase;
