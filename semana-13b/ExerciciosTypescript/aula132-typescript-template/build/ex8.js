const num = -54;
let numbers = [];
function createArrayNumber(num) {
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
;
console.log(createArrayNumber(num));
//# sourceMappingURL=ex8.js.map