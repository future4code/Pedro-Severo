import { RecipeGateway } from './../business/gateways/recipe/RecipeGateway';
import { Recipe } from "../business/entities/Recipe";
import { KnexConnection } from './knexConnection/knexConnection';


export class RecipeModel {
    constructor(
        public id: string,
        public title: string, 
        public description: string,
        public date_: Date,
        public userId: string
    ) {};
};

export class RecipeEntityMapper {
    entityToModel(entity: Recipe): RecipeModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            description: entity.getDescription(),
            date_: entity.getDate(),
            userId: entity.getUserId()
        };
    };
};

export class RecipeDatabase extends KnexConnection implements RecipeGateway {
    private recipeEntityMapper: RecipeEntityMapper;

    constructor () {
        super()
        this.recipeEntityMapper = new RecipeEntityMapper;
    };

    async createRecipe(recipe: Recipe) {
        await this.connection('Recipes_Food4U').insert(this.recipeEntityMapper.entityToModel(recipe));
    };
};