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
const knex_1 = __importDefault(require("knex"));
class UserModel {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
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
            email: entity.getEmail(),
            password: entity.getPassword()
        };
    }
    ;
}
exports.UserEntityMapper = UserEntityMapper;
;
class UserDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'pedro',
                password: process.env.SENHA_DATABASE,
                database: 'pedro'
            }
        });
        this.userEntityMapper = new UserEntityMapper();
    }
    ;
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection('Users_Food4U').insert(this.userEntityMapper.entityToModel(user));
        });
    }
    ;
    getUserByEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.connection.raw(`
            SELECT email, id, password FROM Users_Food4U
            WHERE Users_Food4U.email="${userEmail}";
        `);
            return results[0][0];
        });
    }
    ;
}
exports.UserDatabase = UserDatabase;
;
