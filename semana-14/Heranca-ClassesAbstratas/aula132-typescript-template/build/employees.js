"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
class Employee {
    constructor(name, salary, job) {
        this.name = name;
        this.salary = salary;
        this.job = job;
        Employee.employeesNumber += 1;
    }
    ;
    sayJob() {
        console.log(`Minha função aqui é de: ${this.job}`);
    }
    ;
}
Employee.employeesNumber = 0;
;
class Cashier extends Employee {
    constructor(name, salary, job) {
        super(name, salary, job);
    }
    ;
    calculateBill(bill) {
        let sum = 0;
        for (let dish of bill) {
            sum += dish.price;
        }
        ;
        return sum;
    }
    ;
}
exports.Cashier = Cashier;
;
class Manager extends Cashier {
    constructor(name, salary, job) {
        super(name, salary, job);
    }
    ;
}
exports.Manager = Manager;
;
class Chef extends Employee {
    constructor(name, salary, job) {
        super(name, salary, job);
    }
    ;
    removeDishFromMenu(menu, dishName) {
        for (let dish of menu) {
            let i = 0;
            if (dish.name === dishName) {
                menu.splice(i, 1);
            }
            ;
            i++;
        }
        ;
        return menu;
    }
    ;
    addDishToMenu(type, name, price, cost, ingredients, timeToCook, sliceNumber, menu) {
        if (type === "dessert") {
            const newDish = new dessert_1.Dessert(name, price, cost, ingredients, timeToCook, sliceNumber);
            menu.push(newDish);
            return menu;
        }
        else if (type === "saltydish") {
            const newDish = new saltydish_1.SaltyDish(name, price, cost, ingredients, timeToCook);
            menu.push(newDish);
            return menu;
        }
        else {
            console.log("O tipo indicado não existe. Tente novamente");
            return menu;
        }
        ;
    }
    ;
}
exports.Chef = Chef;
;
const cashier = new Cashier("jão", 1200, "Caixa");
const chef = new Chef("Olivier", 5000, "Chef");
console.log(Chef.employeesNumber);
//# sourceMappingURL=employees.js.map