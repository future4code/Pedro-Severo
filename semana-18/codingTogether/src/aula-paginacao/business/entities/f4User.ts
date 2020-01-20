export class F4User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private type: F4UserType
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

  public getPassword(): string {
    return this.password;
  }

  public getType(): F4UserType {
    return this.type;
  }

  public static convertF4UserType(type: string): F4UserType {
    switch (type) {
      case "TEACHER":
        return F4UserType.TEACHER;
      case "STUDENT":
        return F4UserType.STUDENT;
      case "CX":
        return F4UserType.CX;
      case "ASIAN_NATION":
        return F4UserType.ASIAN_NATION;
      default:
        throw new Error("Tipo de usuário inválido");
    }
  }
}

export enum F4UserType {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  CX = "CX",
  ASIAN_NATION = "ASIAN_NATION"
}
