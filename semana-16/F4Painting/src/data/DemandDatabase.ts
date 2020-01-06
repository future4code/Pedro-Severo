import { Demand } from './../business/entities/Demand';
import knex from 'knex';


export class DemandDatabase {
    // criar os parâmetros necessários e o método para criar um pedido
    // apenas para exportar o necessário para dar sequência no usecases

    private connection: knex

    constructor () {
        this.connection = knex({
            
        })
    }
};