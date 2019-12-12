"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook, slicesNumber) {
        super(name, price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    ;
    getTotalPrice() {
        return this.price * this.slicesNumber;
    }
    ;
    cook() {
        console.log("Baking Dessert");
    }
    ;
}
exports.Dessert = Dessert;
;
//# sourceMappingURL=dessert.js.map