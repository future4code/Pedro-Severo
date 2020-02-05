"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientsTypes_1 = require("./clientsTypes");
const clientsTypes_2 = require("./clientsTypes");
const clientsTypes_3 = require("./clientsTypes");
class ResidentialClient extends clientsTypes_3.Residence {
    constructor() {
        super(...arguments);
        this.clientName = this.name;
        this.clientNumber = Math.floor(Math.random() * 1000);
        this.consumedEnergy = Math.floor(Math.random() * 10000) * 0.75;
    }
    calculateBill() {
        return this.consumedEnergy;
    }
    ;
}
exports.ResidentialClient = ResidentialClient;
;
class ComercialClient extends clientsTypes_2.Trade {
    constructor() {
        super(...arguments);
        this.clientName = this.tradeName;
        this.clientNumber = Math.floor(Math.random() * 1000);
        this.consumedEnergy = Math.floor(Math.random() * 10000) * 0.53;
    }
    calculateBill() {
        return this.consumedEnergy;
    }
    ;
}
exports.ComercialClient = ComercialClient;
;
class IndustrialClient extends clientsTypes_1.Industry {
    constructor() {
        super(...arguments);
        this.clientName = this.industryName;
        this.clientNumber = Math.floor(Math.random() * 1000);
        this.consumedEnergy = Math.floor(Math.random() * 10000) * 0.45 + 10000;
    }
    calculateBill() {
        return this.consumedEnergy;
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
    printClientBills(clientName, clientNumber, clients) {
        for (let client of clients) {
            if (clientName === client.clientName && clientNumber === client.clientNumber) {
                console.log(`${client.clientNumber} - ${client.clientName} - R$${client.consumedEnergy}`);
                return;
            }
            ;
        }
        ;
        console.log("Nome do cliente e/ou número informado está(ao) errado(s)");
    }
    ;
    calculateAllIncome(clients) {
        let allIncome = 0;
        for (let consumedEnergy of clients) {
            allIncome += consumedEnergy.consumedEnergy;
        }
        ;
        return allIncome;
    }
    ;
}
exports.ClientManager = ClientManager;
;
const newResidentialClient = new ResidentialClient("Pedro", "cpf do Pedro", "cep");
const newComercialClient = new ComercialClient("Future4", "cnpj da Future4", "cep");
const newIndustrialClient = new IndustrialClient("Indústria", "cnpj da Insdústria", "cep");
const allClients = [];
const clientManager = new ClientManager(allClients);
clientManager.addClient(newResidentialClient);
clientManager.addClient(newComercialClient);
clientManager.addClient(newIndustrialClient);
console.log(allClients);
console.log(clientManager.getClientsQuantity());
console.log(clientManager.printClientBills("Pedro", newResidentialClient.clientNumber, allClients));
console.log(clientManager.calculateAllIncome(allClients));
//# sourceMappingURL=clients.js.map