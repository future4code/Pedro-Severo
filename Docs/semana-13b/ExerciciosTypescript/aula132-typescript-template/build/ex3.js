function informAge(year) {
    if (year.number <= 100000 && year.number > 4000 && year.acDc === "AC") {
        return "Pré-história";
    }
    else if ((year.number < 4000 && year.acDc === "AC") || (year.number <= 476 && year.acDc === "DC")) {
        return "Idade Antiga";
    }
    else if (year.number > 476 && year.number <= 1453 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Média";
    }
    else if (year.number > 1453 && year.number <= 1789 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Moderna";
    }
    else if (year.number > 1789 && year.number <= 2020 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Contaemporânea";
    }
    else {
        return "O ano indicado não existe ou não abrange a existência da espécie humana";
    }
    ;
}
;
const year0 = {
    number: 100001,
    acDc: "AC",
};
const year1 = {
    number: 10000,
    acDc: "AC",
};
const year2 = {
    number: 3999,
    acDc: "AC",
};
const year3 = {
    number: 477,
    acDc: undefined,
};
const year4 = {
    number: 1454,
    acDc: undefined,
};
const year5 = {
    number: 1800,
    acDc: undefined,
};
const year6 = {
    number: 2021,
    acDc: undefined,
};
console.log(informAge(year0));
console.log(informAge(year1));
console.log(informAge(year2));
console.log(informAge(year3));
console.log(informAge(year4));
console.log(informAge(year5));
console.log(informAge(year6));
//# sourceMappingURL=ex3.js.map