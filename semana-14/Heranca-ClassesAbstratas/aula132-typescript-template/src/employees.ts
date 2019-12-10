import { Employee } from "./employee";
import { Dish } from "./dish";
import { menu } from "./menu";
import { Dessert } from "./dessert";


export class Cashier extends Employee {
    static JOB = "Caixa"; 
    constructor (name: string, salary: number) {
        super(name, salary);
    };

    public sayJob(): void {
        console.log(`Minha função aqui é de: ${Cashier.JOB}`)
    };

    public calculateBill(bill: Dish[]): number {
        let sum: number = 0        
        for (let dish of bill) {
            sum += dish.price;
        };
        
        return sum
    };
};

const cashier: Cashier = new Cashier("Jão", 1200)
console.log(cashier.calculateBill(menu))

export class Manager extends Cashier {
    static JOB = "Gerente"; 
    constructor (name: string, salary: number) {
        super(name, salary);
    };

};