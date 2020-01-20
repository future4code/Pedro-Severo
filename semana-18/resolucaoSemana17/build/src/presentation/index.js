import express, { Request, Response } from 'express';
import { LoginUC } from "../business/usecases/auth/login";
import { GetLoggedUserInformationUC } from "../business/usecases/users/getLoggedUserInformation";
import { JwtAuthService } from "../services/auth/jwtAuthService";
import { UserDatabase } from "../data/userDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { CreateUserUC } from "../business/usecases/users/createUser";
import { ChangeUserPasswordUC } from "../business/usecases/auth/changeUserPassword";
import { GetAllUsersUC } from "../business/usecases/users/getAllUsers";
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
const app = express();
app.use(express.json()); // Linha mágica (middleware)
const getTokenFromHeaders = (headers) => {
    return (headers["auth"]);
    as;
    string;
     || "";
};
app.post("/login", async(req, Request, res, Response), {
    try: {
        const: uc = new LoginUC(new JwtAuthService(), new UserDatabase(), new BcryptService()),
        const: result = await, uc: .execute(req.body.email, req.body.password),
        res: .status(200).send(result)
    }, catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});
app.get("/getMyInformation", async(req, Request, res, Response), {
    try: {
        const: uc = new GetLoggedUserInformationUC(new JwtAuthService(), new UserDatabase()),
        const: result = await, uc: .execute(getTokenFromHeaders(req.headers)),
        res: .status(200).send(result)
    }, catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});
app.post("/signup", async(req, Request, res, Response), {
    try: {
        const: createUserUC = new CreateUserUC(new UserDatabase(), new BcryptService(), new V4IdGenerator()),
        const: result = await, createUserUC: .execute({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        }),
        res: .status(200).send(result)
    }, catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});
app.post("/changePassword", async(req, Request, res, Response), {
    try: {
        const: changePasswordUC = new ChangeUserPasswordUC(new JwtAuthService(), new UserDatabase(), new BcryptService()),
        const: result = await, changePasswordUC: .execute({
            token: getTokenFromHeaders(req.headers),
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        }),
        res: .status(200).send(result)
    }, catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});
app.get("/getAllUsers", async(req, Request, res, Response), {
    try: {
        const: getAllUsersUC = new GetAllUsersUC(new UserDatabase()),
        const: result = await, getAllUsersUC: .execute(),
        res: .status(200).send(result)
    }, catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});
export default app;
