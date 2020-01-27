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
const express_1 = __importDefault(require("express"));
const login_1 = require("../business/usecases/auth/login");
const getLoggedUserInformation_1 = require("../business/usecases/users/getLoggedUserInformation");
const jwtAuthService_1 = require("../services/auth/jwtAuthService");
const userDatabase_1 = require("../data/userDatabase");
const bcryptService_1 = require("../services/cryptography/bcryptService");
const createUser_1 = require("../business/usecases/users/createUser");
const changeUserPassword_1 = require("../business/usecases/auth/changeUserPassword");
const getAllUsers_1 = require("../business/usecases/users/getAllUsers");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new login_1.LoginUC(new jwtAuthService_1.JwtAuthService(), new userDatabase_1.UserDatabase(), new bcryptService_1.BcryptService());
        const result = yield uc.execute(req.body.email, req.body.password);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.get("/getMyInformation", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new getLoggedUserInformation_1.GetLoggedUserInformationUC(new jwtAuthService_1.JwtAuthService(), new userDatabase_1.UserDatabase());
        const result = yield uc.execute(getTokenFromHeaders(req.headers));
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUserUC = new createUser_1.CreateUserUC(new userDatabase_1.UserDatabase(), new bcryptService_1.BcryptService());
        const result = yield createUserUC.execute({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.post("/changePassword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const changePasswordUC = new changeUserPassword_1.ChangeUserPasswordUC(new jwtAuthService_1.JwtAuthService(), new userDatabase_1.UserDatabase(), new bcryptService_1.BcryptService());
        const result = yield changePasswordUC.execute({
            token: getTokenFromHeaders(req.headers),
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.get("/getAllUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUsersUC = new getAllUsers_1.GetAllUsersUC(new userDatabase_1.UserDatabase());
        const result = yield getAllUsersUC.execute();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
exports.default = app;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = new userDatabase_1.UserDatabase();
    yield db.alterTable();
});
main();
