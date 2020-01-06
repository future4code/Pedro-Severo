import { Request } from './Request';

export class Client {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private requests: Request[]
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

    public getRequests() {
        return this.requests
    };

};