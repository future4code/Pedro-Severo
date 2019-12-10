"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const date = moment("28/07/2019 às 15:30", "DD/MM/YYYY HH:mm");
console.log(date.unix());
console.log(date.format("MM-DD-YYYY hh:mm [pm]"));
const diff = date.diff(moment(), "days");
console.log(date.format(`DD/MM/YYYY [é] dddd [e foi há ${-diff} dias.]`).toLowerCase());
//# sourceMappingURL=exercicio2.js.map