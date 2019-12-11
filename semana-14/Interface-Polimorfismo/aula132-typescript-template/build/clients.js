"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientsTypes_1 = require("./clientsTypes");
const clientsTypes_2 = require("./clientsTypes");
const clientsTypes_3 = require("./clientsTypes");
class ResidentialClient extends clientsTypes_3.Residence {
    constructor(name, cpf, cep, clientNumber) {
        super(name, cpf, cep);
        this.clientNumber = clientNumber;
    }
    ;
    calculateBill() {
        return 2;
    }
    ;
}
exports.ResidentialClient = ResidentialClient;
;
const newClient = new ResidentialClient("Pedro", "cpf", "cep", 1);
console.log(newClient.clientNumber);
class ComercialClient extends clientsTypes_2.Trade {
    calculateBill() {
        return 2;
    }
    ;
}
exports.ComercialClient = ComercialClient;
;
class IndustrialClient extends clientsTypes_1.Industry {
    calculateBill() {
        return 2;
    }
    ;
}
exports.IndustrialClient = IndustrialClient;
;
class ClientManager {
    constructor(clients) {
        this.clients = clients;
    }
    ;
    addClient(client) {
        this.clients.push(client);
    }
    ;
    getClientsQuantity() {
        return this.clients.length;
    }
    ;
}
exports.ClientManager = ClientManager;
;
//# sourceMappingURL=clients.js.map