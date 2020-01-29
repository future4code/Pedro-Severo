import { GetAllUsersUseCase } from './../business/usecases/User/GetAllUsersUseCase';
import { GetAllUsersInput } from "../business/usecases/User/GetAllUsersUseCase";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { UserDatabase } from "../data/User/UserDatabase";

export async function GetAllUsersEndpoint() {
    try {
        const input: GetAllUsersInput = {
            userId: authenticate(req)
        };

        const userGateway = new UserDatabase();
        const useCase = new GetAllUsersUseCase(userGateway);

        const result = await useCase.execute(input);
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };    
    } catch (err) {
        throw new Error(err);
    };
};