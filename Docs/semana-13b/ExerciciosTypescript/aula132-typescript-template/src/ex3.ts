type year = {
    number: number | undefined,
    acDc: string | undefined,
};

function informAge(year: year): string {
    if (year.number <= 100000 && year.number > 4000 && year.acDc === "AC") {
        return "Pré-história"
    } else if ((year.number < 4000 && year.acDc === "AC") || (year.number <= 476 && year.acDc === "DC")) {
        return "Idade Antiga"
    } else if (year.number > 476 && year.number <= 1453 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Média"
    } else if (year.number > 1453 && year.number <= 1789 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Moderna"
    } else if (year.number > 1789 && year.number <= 2020 && (year.acDc === "DC" || year.acDc === undefined)) {
        return "Idade Contaemporânea"
    } else {return "O ano indicado não existe ou não abrange a existência da espécie humana"};
};

// Erro
const year0: year = {
    number: 100001,
    acDc: "AC",
};

// Pré Histório
const year1: year = {
    number: 10000,
    acDc: "AC",
};

// Idade Antiga
const year2: year = {
    number: 3999,
    acDc: "AC",
};

// Idade Media
const year3: year = {
    number: 477,
    acDc: undefined,
};

// Idade Moderna
const year4: year = {
    number: 1454,
    acDc: undefined,
};

// Idade Contemporânea
const year5: year = {
    number: 1800,
    acDc: undefined,
};

// Erro
const year6: year = {
    number: 2021,
    acDc: undefined,
};


console.log(informAge(year0))
console.log(informAge(year1))
console.log(informAge(year2))
console.log(informAge(year3))
console.log(informAge(year4))
console.log(informAge(year5))
console.log(informAge(year6))