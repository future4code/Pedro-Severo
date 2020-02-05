"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class KnexConnection {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "52.22.125.22",
                user: "pedro",
                password: process.env.DATABASE_PASSWORD,
                database: "astromatch_db",
                debug: true
            }
        });
    }
}
exports.KnexConnection = KnexConnection;
;
