export class User {
    constructor (
        private id: string, 
        private name: string, 
        private email: string,
        private photo: string,
        private birth: Date,
        private password: string
    ) {};

    public getId(): string {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public getEmail(): string {
        return this.email;
    };

    public getPhoto(): string {
        return this.photo;
    };

    public getBirth(): Date {
        return this.birth;
    };

    public getPassword(): string {
        return this.password;
    };
};