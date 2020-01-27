export interface CryptographyCompareGateway {
  compare(word: string, hash: string): Promise<boolean>;
}
