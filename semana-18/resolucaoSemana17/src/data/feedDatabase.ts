import {BaseDatabase} from './BaseDatabase'
import {FeedGateway} from '../business/gateways/feed/feedGateway'
import {Recipe} from '../business/entities/Recipe'

interface RecipeFeedModel {
  recipeId: number
  title: string,
  description: string,
  userId: string
  creation_date: string
  userName: string
  posterId: string
}

export class FeedDatabase extends BaseDatabase implements FeedGateway {
  async getRecipesFeedForUser(userId: string) {
    // const result = await this.connection.raw(`
    // SELECT r.id, r.title, r.description, r.creation_date, u.name as userName FROM users_relations rel
    // JOIN Recipes r ON rel.followed_id=r.userId
    // JOIN Users u ON rel.followed_id=u.id
    // WHERE follower_id="${userId}";`)

    const result = await this.connection.raw(`SELECT * FROM feed WHERE userId="${userId}"`)

    const recipesFromDb: RecipeFeedModel[] = result[0]

    return recipesFromDb.map(recipe => ({
      recipe: new Recipe(recipe.title, recipe.description, recipe.posterId, new Date(recipe.creation_date)),
      userName: recipe.userName
    }))
  }

  async insertRecipeIntoFeed(recipeModel: RecipeFeedModel) {
    return this.connection.insert(recipeModel).into('feed')
  }
}
