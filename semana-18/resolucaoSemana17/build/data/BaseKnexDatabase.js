"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseKnexDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'darvas',
                password: 'teste',
                database: 'aulas_arquitetura'
            }
        });
    }
}
exports.BaseKnexDatabase = BaseKnexDatabase;
