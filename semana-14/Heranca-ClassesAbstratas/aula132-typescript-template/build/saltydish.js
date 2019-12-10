"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    ;
    cook() {
        console.log("Cooking Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
;
//# sourceMappingURL=saltydish.js.map