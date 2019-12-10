"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saltydish_1 = require("./saltydish");
const dessert_1 = require("./dessert");
exports.feijoada = new saltydish_1.SaltyDish(25, 5, ["feijão", "carne de porco", "laranja"], 60);
exports.feijaoTropeiro = new saltydish_1.SaltyDish(25, 7, ["feijão", "farinha", "ovo", "torresmo"], 40);
exports.pudim = new dessert_1.Dessert(5, 10, ["leite", "leite condensado", "açucar"], 40, 20);
exports.mousseDeMaracuja = new dessert_1.Dessert(5, 10, ["leite", "maracuja", "açucar"], 30, 20);
exports.menu = [exports.feijoada, exports.feijaoTropeiro, exports.pudim, exports.mousseDeMaracuja];
console.log(exports.menu);
//# sourceMappingURL=menu.js.map