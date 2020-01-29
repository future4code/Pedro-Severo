import { GetAllMatchesInput, GetAllMatchesUseCase } from "../business/usecases/User/GetAllMatchesUseCase";
import { authenticate } from "./BaseFunctions/baseFunctions";
import { UserDatabase } from "../data/User/UserDatabase";


export async function GetAllMatchesEndpoint () {
    try {
        const input: GetAllMatchesInput = {
            userId: authenticate(req)
        };

        const userGateway = new UserDatabase();
        const useCase = new GetAllMatchesUseCase(userGateway);

        const result = await useCase.execute(input);
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (err) {
        throw new Error(err);
    };
}; 