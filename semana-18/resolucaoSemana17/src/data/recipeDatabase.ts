import {RecipeGateway} from '../business/gateways/recipes/recipeGateway'
import {Recipe} from '../business/entities/Recipe'
import {BaseDatabase} from './BaseDatabase'
import {FeedDatabase} from './feedDatabase'


export class RecipeDatabase extends BaseDatabase implements RecipeGateway {
  private feedDatabase: FeedDatabase
  constructor() {
    super()
    this.feedDatabase = new FeedDatabase()
  }

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    const response = await this.connection.raw(`
    INSERT INTO Recipes (title, description, userId, creation_date)
    VALUES ("${recipe.getTitle()}",
    "${recipe.getDescription()}",
    "${recipe.getUserId()}",
    "${this.getSQLDateFromTSDate(recipe.getCreationDate())}");
    `)

    const userQuery = await this.connection.select('name').from('Users').where('id', recipe.getUserId())
    const userName: string = userQuery[0].name

    const query = await this.connection.raw(`SELECT * FROM users_relations WHERE followed_id="${recipe.getUserId()}";`)

    const followersIds = query[0].map((res: {follower_id: string, followed_id: string}) => res.follower_id)

    const promises = followersIds.map((followerId: string) => {
      return this.feedDatabase.insertRecipeIntoFeed({
        userId: followerId,
        recipeId: response[0].insertId as number,
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        posterId: recipe.getUserId(),
        creation_date: this.getSQLDateFromTSDate(recipe.getCreationDate()),
        userName
      })
    })

    await Promise.all(promises)

    return recipe
  }
}
