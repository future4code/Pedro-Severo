import { Recipe } from "../../entities/Recipe";

export interface FeedGateway {
    getFeedRecipesForUser(userId: string): Promise<Recipe[]>
};