export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private age: number,
    private password: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAge(): number {
    return this.age;
  }

  public getPassword(): string {
    return this.password;
  }
}
