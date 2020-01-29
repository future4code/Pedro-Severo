import { UnmatchUseCase } from './../business/usecases/User/UnmatchUseCase';
import { authenticate } from "./BaseFunctions/baseFunctions";
import { UnmatchInput } from "../business/usecases/User/UnmatchUseCase";
import { UserDatabase } from "../data/User/UserDatabase";

export async function UnmatchEndpoint() {
    try {
        const senderUserId = authenticate(req)

        const input: UnmatchInput = {
            senderUserId,
            receptorUserId: req.body.receptorUserId
        };

        const userGateway = new UserDatabase();

        const useCase = new UnmatchUseCase(userGateway);

        const result = await useCase.execute(input);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };    
    } catch (err) {
        throw new Error(err);
    };
};