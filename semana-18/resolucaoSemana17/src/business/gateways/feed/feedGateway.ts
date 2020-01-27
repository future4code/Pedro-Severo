import {Recipe} from '../../entities/Recipe'

export interface FeedResponse {
  recipe: Recipe
  userName: string
}

export interface FeedGateway {
  getRecipesFeedForUser(userId: string): Promise<FeedResponse[]>
}
