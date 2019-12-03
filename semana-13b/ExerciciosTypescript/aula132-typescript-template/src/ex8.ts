// a)
const num: number = 6;
let numbers: number[] = [];

function createArrayNumber(num: number): number | undefined {
    if (num > 0) {
        for (let i = num; i > 0; i = i - 1) {
            numbers.push(i)
        };
        
        let mult:  number = 1;
        for(let i = 0; i < numbers.length; i++) {
            mult *= numbers[i];
        };
        
        return mult;
    } else if (num === 0) {
        return 1;
    } else {return undefined}
}; 

console.log(createArrayNumber(num))