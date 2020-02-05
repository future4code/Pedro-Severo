export class User {
  constructor(
    private id: string,
    private name: string,
    private nickname: string,
    private email: string,
    private birthdate: Date) {
  }

    public getId() {
      return this.id
    }

    public getName() {
      return this.name
    }

    public getNickname() {
      return this.nickname
    }

    public getEmail() {
      return this.email
    }

    public getBirthdate() {
      return this.birthdate
    }
}
