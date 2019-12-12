import { Client} from './clientsTypes';
import { Industry } from './clientsTypes';
import { Trade } from './clientsTypes';
import { Residence } from './clientsTypes';

export class ResidentialClient extends Residence implements Client {
    clientName: string = this.name;
    clientNumber: number = Math.floor(Math.random()*1000);  
    consumedEnergy: number = Math.floor(Math.random()*10000)*0.75;
  
    calculateBill(): number {
        return this.consumedEnergy
    };

};


export class ComercialClient extends Trade implements Client {
    clientName: string = this.tradeName;
    clientNumber: number = Math.floor(Math.random()*1000);  
    consumedEnergy: number = Math.floor(Math.random()*10000)*0.53;

    calculateBill(): number {
        return this.consumedEnergy
    };
};

export class IndustrialClient extends Industry implements Client {
    clientName: string = this.industryName;
    clientNumber: number = Math.floor(Math.random()*1000);  
    consumedEnergy: number = Math.floor(Math.random()*10000)*0.45+10000;

    calculateBill(): number {
        return this.consumedEnergy
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

const newResidentialClient: ResidentialClient = new ResidentialClient("Pedro", "cpf do Pedro", "cep");
const newComercialClient: ComercialClient = new ComercialClient("Future4", "cnpj da Future4", "cep");
const newIndustrialClient: IndustrialClient = new IndustrialClient("Indústria", "cnpj da Insdústria", "cep");

const allClients: Client[] = [];


const clientManager: ClientManager = new ClientManager(allClients);
clientManager.addClient(newResidentialClient);
clientManager.addClient(newComercialClient);
clientManager.addClient(newIndustrialClient);

console.log(allClients);

console.log(clientManager.getClientsQuantity());

clientManager.printClientBills("Pedro", newResidentialClient.clientNumber, allClients);
console.log(clientManager.calculateAllIncome(allClients))