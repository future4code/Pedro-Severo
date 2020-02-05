import { Place } from './place';

export interface Client {
    clientName: string;
    clientNumber: number;  
    consumedEnergy: number;

    calculateBill(): number;
};

export class Industry extends Place {
    constructor(
      public industryName: string,  
      public industryNumber: string,  
      cep: string
    ) {
      super(cep);
    }
};

export class Trade extends Place {
    constructor(
      public tradeName: string,  
      public cnpj: string,  
      cep: string
    ) {
      super(cep);
    }
};

export class Residence extends Place {
    constructor(
      public name: string,  
      public cpf: string,  
      cep: string
    ) {
      super(cep);
    }
};



// É interface: Client;
// São classes: Industry, Trade e Residence;
// As classes desse arquivo são filhas da classe abstata place, que está no arquivo place.ts