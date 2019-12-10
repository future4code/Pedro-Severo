"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const menu_1 = require("./menu");
class Cashier extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    ;
    sayJob() {
        console.log(`Minha função aqui é de: ${Cashier.JOB}`);
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
Cashier.JOB = "Caixa";
;
const cashier = new Cashier("Jão", 1200);
console.log(cashier.calculateBill(menu_1.menu));
class Manager extends Cashier {
    constructor(name, salary) {
        super(name, salary);
    }
    ;
}
exports.Manager = Manager;
Manager.JOB = "Gerente";
;
//# sourceMappingURL=employees.js.map