"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
console.log(moment("20/10/2019", "DD/MM/YYYY").diff(moment("10/10/2019", "DD/MM/YYYY"), "days"));
console.log(moment("31/12/2019", "DD/MM/YYYY").diff(moment("01/01/2019", "DD/MM/YYYY"), "days"));
console.log(moment("19/08/2010", "DD/MM/YYYY").diff(moment("10/12/1995", "DD/MM/YYYY"), "days"));
//# sourceMappingURL=exercicio3.js.map