"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
;
class Industry extends place_1.Place {
    constructor(industryName, industryNumber, cep) {
        super(cep);
        this.industryName = industryName;
        this.industryNumber = industryNumber;
    }
}
exports.Industry = Industry;
;
class Trade extends place_1.Place {
    constructor(tradeName, cnpj, cep) {
        super(cep);
        this.tradeName = tradeName;
        this.cnpj = cnpj;
    }
}
exports.Trade = Trade;
;
class Residence extends place_1.Place {
    constructor(name, cpf, cep) {
        super(cep);
        this.name = name;
        this.cpf = cpf;
    }
}
exports.Residence = Residence;
;
//# sourceMappingURL=clientsTypes.js.map