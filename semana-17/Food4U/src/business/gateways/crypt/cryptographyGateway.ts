export interface CryptographyGateway {
    encrypt(word: string): Promise<string>;
};