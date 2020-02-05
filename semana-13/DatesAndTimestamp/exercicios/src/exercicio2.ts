import * as moment from "moment";
moment.locale("pt-br");
const date = moment("28/07/2019 às 15:30", "DD/MM/YYYY HH:mm");
console.log(date.unix());
console.log(date.format("MM-DD-YYYY hh:mm [pm]"));
console.log(date.format("DD/MM/YYYY [é] dddd").toLowerCase());
