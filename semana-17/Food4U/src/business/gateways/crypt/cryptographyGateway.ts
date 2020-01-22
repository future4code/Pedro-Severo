export interface CryptographyGateway {
    encrypt(word: string): Promise<string>;
    compare(passwordInput: string, passwordAunthenticate: string): Promise<boolean>;
};