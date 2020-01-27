import { User } from "../business/entities/User";
import knex from "knex";
export class UserDatabase {
    constructor() {
        this.connection = knex({
            client: "mysql",
            connection: {
                host: "localhost",
                user: "root",
                password: "teste",
                database: "aulas_feed"
            }
        });
        this.async = getUserById(id, string);
        this.async = getUserByEmail(email, string);
        this.async = getAllUsers();
    }
    Promise() {
        const query = await;
        this.connection.raw(`SELECT * FROM Users WHERE id='${parseInt(id)}';`);
        const returnedUser = query[0][0];
        if (!returnedUser) {
            throw new Error("User not found");
        }
        return new User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
    }
    Promise() {
        const query = await;
        this.connection.raw(`SELECT * FROM Users WHERE email='${email}';`);
        const returnedUser = query[0][0];
        if (!returnedUser) {
            throw new Error("User not found");
        }
        return new User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
    }
    Promise() { }
}
 > {
    const: query = this.connection.raw("SELECT * FROM Users;"),
    const: usersFromDb = await, query: ,
    return: usersFromDb[0].map((user) => new User(user.id, user.name, user.email, user.age, user.password))
};
async;
createUser(user, User);
Promise < void  > {
    await: this.connection
        .insert({
        name: user.getName(),
        age: user.getAge(),
        email: user.getEmail(),
        password: user.getPassword()
    })
        .into("Users")
};
async;
updatePassword(id, string, newPassword, string);
Promise < void  > {
    await: this.connection.raw(`UPDATE Users SET password='${newPassword}' WHERE id=${id};`)
};
