import { Demand } from './../business/entities/Demand';
import knex from 'knex';
import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export class DemandDatabase {
    // criar os parâmetros necessários e o método para criar um pedido
    // apenas para exportar o necessário para dar sequência no usecases
    private connection: knex

    constructor () {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user : 'pedro',
                password : process.env.SENHA_BANCO,
                database : 'pedro'
            }
        });
    };
};