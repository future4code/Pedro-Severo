"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num = 6;
let numbers = [];
function createFactorial(num) {
    if (num > 0) {
        for (let i = num; i > 0; i = i - 1) {
            numbers.push(i);
        }
        ;
        let mult = 1;
        for (let i = 0; i < numbers.length; i++) {
            mult *= numbers[i];
        }
        ;
        return mult;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return undefined;
    }
}
exports.createFactorial = createFactorial;
;
//# sourceMappingURL=ex8.js.map