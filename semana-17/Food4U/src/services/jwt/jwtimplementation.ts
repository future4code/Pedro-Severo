import * as jwt from 'jsonwebtoken';
import { AuthenticationGateway } from './../../business/gateways/authentication/authenticationGateway';

export class JwtImplementation implements AuthenticationGateway {
    private getJwtSecretKey(): string { 
        if(!process.env.JWT_SECRET) {
            throw new Error ("Missing JWT secret key.");
        };

        return process.env.JWT_SECRET
    };

    generateToken(userId: string): string {
        const jwtSecretKey = this.getJwtSecretKey()

        const token = jwt.sign(
            { userId },
            jwtSecretKey,
            { expiresIn: '1h'}
        )

        return token
    };
};