import knex from 'knex';
import { RecipeGateway } from './../business/gateways/recipe/RecipeGateway';
import { Recipe } from "../business/entities/Recipe";


export class RecipeModel {
    constructor(
        public id: string,
        public title: string, 
        public description: string,
        public date: string,
        public userId: string
    ) {};
};

export class RecipeEntityMapper {
    entityToModel(entity: Recipe): RecipeModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            description: entity.getDescription(),
            date: entity.getDate(),
            userId: entity.getUserId()
        };
    };
};

export class RecipeDatabase implements RecipeGateway {
    private connection: knex;
    private recipeEntityMapper: RecipeEntityMapper;

    constructor () {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'pedro',
                password: process.env.SENHA_DATABASE,
                database: 'pedro'
            }
        });

        this.recipeEntityMapper = new RecipeEntityMapper;
    };

    async createRecipe(recipe: Recipe) {
        await this.connection('Recipers_Food4U').insert(this.recipeEntityMapper.entityToModel(recipe));
    };
};