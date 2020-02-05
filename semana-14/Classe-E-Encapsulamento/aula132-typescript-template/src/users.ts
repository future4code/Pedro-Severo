export class Transaction {
    cpf: string;
    value: number;
    description: string;

    constructor(cpf: string, value: number, description: string) {
        this.cpf = cpf;
        this.value = value;
        this.description = description;
    };
};

export class UserAccount {
    name: string;
    cpf: string;
    age: number;
    balance: number;
    transactions: Transaction[];
    
    constructor(name: string, cpf: string, age: number) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
    };

    getBalance(): void {
        console.log("Seu saldo é de: ", this.balance);
    };

    addBalance(transaction: Transaction): void {
        this.balance += transaction.value;
        this.transactions.push(transaction);
    };
};