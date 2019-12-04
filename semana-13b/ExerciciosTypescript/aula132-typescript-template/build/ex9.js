"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txt = "pedro";
const ex8_1 = require("./ex8");
function createFactorialString(string) {
    const numberString = string.length;
    console.log(numberString);
    return ex8_1.createFactorial(numberString);
}
console.log(createFactorialString(txt));
//# sourceMappingURL=ex9.js.map