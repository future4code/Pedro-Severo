import { authenticate } from "./BaseFunctions/baseFunctions";
import { MatchInput, MatchUseCase } from "../business/usecases/User/MatchUseCase";
import { UserDatabase } from "../data/User/UserDatabase";


export async function MatchEndpoint() {
    try {
        const senderUserId = authenticate(req)

        const input: MatchInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new MatchUseCase(userGateway);

        const result = await useCase.execute(input);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };    
    } catch (err) {
        throw new Error(err);
    };
};