"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SignUpEndpoint_1 = require("./presentation/SignUpEndpoint");
const LoginEndpoint_1 = require("./presentation/LoginEndpoint");
const GetAllUsersEndpoint_1 = require("./presentation/GetAllUsersEndpoint");
const MatchEndpoint_1 = require("./presentation/MatchEndpoint");
const UnmatchEndpoint_1 = require("./presentation/UnmatchEndpoint");
const GetAllMatchesEndpoint_1 = require("./presentation/GetAllMatchesEndpoint");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/signup', SignUpEndpoint_1.SignUpEndpoint);
app.post('/login', LoginEndpoint_1.LoginEndpoint);
app.get('/users', GetAllUsersEndpoint_1.GetAllUsersEndpoint);
app.post('/match', MatchEndpoint_1.MatchEndpoint);
app.delete('/unmatch', UnmatchEndpoint_1.UnmatchEndpoint);
app.get('/matches', GetAllMatchesEndpoint_1.GetAllMatchesEndpoint);
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
