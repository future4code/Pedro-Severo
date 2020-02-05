// a) 
const txt: string = "pedro";

import { createFactorial } from "./ex8"; 

function createFactorialString(string: string): number | undefined {
    const numberString = string.length

    return createFactorial(numberString)
};


console.log(createFactorialString(txt));

// b)

