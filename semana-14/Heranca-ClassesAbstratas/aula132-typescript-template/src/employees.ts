import { Dish } from "./dish";
import { menu } from "./menu";
import { Dessert } from "./dessert";
import { SaltyDish } from './saltydish';


abstract class Employee {
    protected name: string;
    protected salary: number;
    protected job: string;
    static employeesNumber = 0;

    constructor (name: string, salary: number, job: string) {
        this.name = name;
        this.salary = salary;
        this.job = job;
        Employee.employeesNumber += 1;
    };

    public sayJob(): void {
        console.log(`Minha função aqui é de: ${this.job}`)
    };
};

export class Cashier extends Employee {
    constructor (name: string, salary: number, job: string) {
        super(name, salary, job);
    };

    public calculateBill(bill: Dish[]): number {
        let sum: number = 0        
        for (let dish of bill) {
            sum += dish.price;
        };
        
        return sum
    };

};

export class Manager extends Cashier {
    constructor (name: string, salary: number, job: string) {
        super(name, salary, job);
    };
};

export class Chef extends Employee {
    constructor (name: string, salary: number, job: string) {
        super(name, salary, job);
    };

    removeDishFromMenu(menu: Dish[], dishName: string): Dish[] {
        for (let dish of menu) {
            let i = 0;
            if (dish.name === dishName) {
                menu.splice(i, 1)
            };
            i++
        };
        return menu
    };

    public addDishToMenu(
        type: string, 
        name: string, 
        price: number, 
        cost: number, 
        ingredients: string[], 
        timeToCook: number, 
        sliceNumber: number, 
        menu: Dish[]
        ): Dish[] {
            if (type === "dessert") {
                const newDish: Dessert = new Dessert(name, price, cost, ingredients, timeToCook, sliceNumber);
                menu.push(newDish); 
                return menu
            } else if (type === "saltydish") {
                const newDish: SaltyDish = new SaltyDish(name, price, cost, ingredients, timeToCook);
                menu.push(newDish);
                return menu
            } else {
                console.log("O tipo indicado não existe. Tente novamente");
                return menu;
            };
    };
};

const cashier: Cashier = new Cashier ("jão", 1200, "Caixa");
const chef: Chef = new Chef("Olivier", 5000, "Chef");

console.log(Employee.employeesNumber)