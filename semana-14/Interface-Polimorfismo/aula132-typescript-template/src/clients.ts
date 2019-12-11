import { Client} from './clientsTypes';
import { Industry } from './clientsTypes';
import { Trade } from './clientsTypes';
import { Residence } from './clientsTypes';

export class ResidentialClient extends Residence implements Client {
    clientName: string = this.name;
    clientNumber: number;  
    consumedEnergy: number;
  
    calculateBill(): number {
      return 2
    };
};

export class ComercialClient extends Trade implements Client {
    clientName: string = this.tradeName;
    clientNumber: number;  
    consumedEnergy: number;

    calculateBill(): number {
        return 2
    };
};

export class IndustrialClient extends Industry implements Client {
    clientName: string = this.industryName;
    clientNumber: number;  
    consumedEnergy: number;

    calculateBill(): number {
        return 2
    };
};

export class ClientManager {
    clients: Client[];

    constructor(clients: Client[]) {
        this.clients = clients
    };

    addClient (client: Client): void {
        this.clients.push(client);
    };

    getClientsQuantity (): number {
        return this.clients.length;
    };

    printClientBills (clientName: string, clientNumber: number, clients: Client[]): void {
        for (let client of clients) {
            if (clientName === client.clientName && clientNumber === client.clientNumber) {
                console.log(`${client.clientNumber} - ${client.clientName} - R$${client.consumedEnergy}`);
                return
            };
        };
        console.log("Nome do cliente e/ou número informado está(ao) errado(s)");
    };

    calculateAllIncome (clients: Client[]): number {
        let allIncome = 0;
        for (let consumedEnergy of clients) {
            allIncome += consumedEnergy.consumedEnergy
        };
        return allIncome;
    };
};