import { Demand } from './Demand';

export class Client {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private Demands: Demand[]
    ) {}

    public getId() {
        return this.id
    };

    public getName() {
        return this.name
    };

    public getEmail() {
        return this.email
    };

    public getDemands() {
        return this.Demands
    };

};