"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, name, email, Demands) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.Demands = Demands;
    }
    getId() {
        return this.id;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getEmail() {
        return this.email;
    }
    ;
    getDemands() {
        return this.Demands;
    }
    ;
}
exports.Client = Client;
;
