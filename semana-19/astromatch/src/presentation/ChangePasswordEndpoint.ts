import { Request, Response } from "express";
import { UserDatabase } from "../data/User/UserDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { ChangePasswordUseCase, ChangePasswordInput } from "../business/usecases/User/ChangePasswordUseCase";


export async function ChangePasswordEndpoint(req: Request, res: Response) {
    try {
        const changePasswordInput: ChangePasswordInput = {
            email: req.body.email, 
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        };

        const userGateway = new UserDatabase();
        const cryptographyGateway = new BcryptService();

        const useCase = new ChangePasswordUseCase(userGateway, cryptographyGateway);

        const result = await useCase.execute(changePasswordInput);

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    };
};