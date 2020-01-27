import * as bcrypt from "bcrypt";
export class BcryptService {
    constructor() {
        this.async = encrypt(word, string);
        this.async = compare(word, string, hash, string);
    }
    Promise() {
        const generatedSalt = await, bcrypt, genSalt = (BcryptService.BCRYPT_SALTS_ROUND);
        const result = await, bcrypt, hash = (word, generatedSalt);
        return result;
    }
    Promise() {
        return bcrypt.compare(word, hash);
    }
}
BcryptService.BCRYPT_SALTS_ROUND = 10;
