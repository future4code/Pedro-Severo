"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook, slicesNumber) {
        super(price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    ;
    getSlicePrice() {
        return this.price / this.slicesNumber;
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