export class User {
    constructor(id, name, email, age, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    getPassword() {
        return this.password;
    }
}
