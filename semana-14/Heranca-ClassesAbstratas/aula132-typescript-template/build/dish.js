"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dish {
    constructor(name, price, cost, ingredients, timeToCook) {
        this.name = name;
        this.price = price;
        this.cost = cost;
        this.ingredients = ingredients;
        this.timeToCook = timeToCook;
    }
    getProfit() {
        return this.price - this.cost;
    }
}
exports.Dish = Dish;
;
//# sourceMappingURL=dish.js.map