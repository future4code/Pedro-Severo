export class User {
  constructor(
    private id: string,
    private name: string,
    private balance: number
  ) {}

  public getBalance(): number {
    return this.balance;
  }
}
