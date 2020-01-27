import { UserGateway } from "../business/gateways/user/userGateway";
import { User } from "../business/entities/User";
import {BaseDatabase} from './BaseDatabase'
import {FeedDatabase} from './feedDatabase'

export class UserDatabase extends BaseDatabase implements UserGateway {
  private feedDatabase: FeedDatabase
  constructor() {
    super()
    this.feedDatabase = new FeedDatabase()
  }

  public async getUserById(id: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM Users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
    if (!returnedUser) {
      throw new Error("User not found");
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.age,
      returnedUser.password
    );
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM Users WHERE email='${email}';`
    );
    const returnedUser = query[0][0];
    if (!returnedUser) {
      throw new Error("User not found");
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.age,
      returnedUser.password
    );
  }
  public async getAllUsers(): Promise<User[]> {
    const query = this.connection.raw("SELECT * FROM Users;");
    const usersFromDb = await query;
    return usersFromDb[0].map(
      (user: any) =>
        new User(user.id, user.name, user.email, user.age, user.password)
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection
      .insert({
        id: user.getId(),
        name: user.getName(),
        age: user.getAge(),
        email: user.getEmail(),
        password: user.getPassword()
      })
      .into("Users");
  }

  public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.connection.raw(
      `UPDATE Users SET password='${newPassword}' WHERE id=${id};`
    );
  }

  async verifyUserExists(id: string): Promise<boolean> {
    const query = await this.connection.raw(
      `SELECT * FROM Users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
    return Boolean(returnedUser);
  }

  async createUserRelation(followerId: string, followedId: string): Promise<void> {
    await this.connection.raw(`
    INSERT INTO users_relations (follower_id, followed_id)
    VALUES ("${followerId}", "${followedId}");
    `)

    const recipes = await this.connection.select('*').from('Recipes').where('userId', followedId)

    const user = await this.getUserById(followedId)

    await Promise.all(recipes.map(recipe => {
      return this.feedDatabase.insertRecipeIntoFeed({
        userId: followerId,
        recipeId: recipe.id,
        title: recipe.title,
        description: recipe.description,
        posterId: recipe.userId,
        creation_date: recipe.creation_date,
        userName: user.getName()
      })
    }))
  }
}
