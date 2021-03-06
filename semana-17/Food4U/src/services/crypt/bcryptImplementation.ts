import { CryptographyGateway } from './../../business/gateways/crypt/cryptographyGateway';
import * as bcrypt from "bcryptjs";

export class BcryptImplementation implements CryptographyGateway {
    private static BCRYPT_SALT_ROUNDS = 10;

    async encrypt(word: string): Promise<string> {
        const salt = await bcrypt.genSalt(BcryptImplementation.BCRYPT_SALT_ROUNDS);
        const encryptedWord = await bcrypt.hash(word, salt);
        
        return encryptedWord;
    };

    async compare(passwordInput: string, passwordAunthenticate: string): Promise<boolean> {
        return bcrypt.compare(passwordInput, passwordAunthenticate);
    };
};