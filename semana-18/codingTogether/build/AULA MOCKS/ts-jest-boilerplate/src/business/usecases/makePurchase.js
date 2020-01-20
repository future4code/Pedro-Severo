"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const invalidArgument_1 = require("../entities/errors/invalidArgument");
const insuficientBalance_1 = require("../entities/errors/insuficientBalance");
const Purchase_1 = require("../entities/Purchase");
class MakePurchaseUC {
    constructor(makePurchaseGateway, userGateway) {
        this.makePurchaseGateway = makePurchaseGateway;
        this.userGateway = userGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.userId) {
                throw new invalidArgument_1.InvalidArgumentError();
            }
            if (input.products.length === 0) {
                throw new invalidArgument_1.InvalidArgumentError("Você tem que informar os produtos");
            }
            let totalAmount = 0;
            input.products.forEach(product => {
                if (product.quantity <= 0 &&
                    product.price <= 0 &&
                    !product.id &&
                    !product.name) {
                    throw new invalidArgument_1.InvalidArgumentError("Dê todas as informações de todos os produtos");
                }
                totalAmount += product.price * product.quantity;
            });
            const user = yield this.userGateway.execute(input.userId);
            if (user.getBalance() < totalAmount) {
                throw new insuficientBalance_1.InsufficientBalance();
            }
            yield this.makePurchaseGateway.execute(input.userId, input.products.map(product => {
                return new Purchase_1.PurchaseProduct(product.id, product.name, product.price, product.quantity);
            }));
            return `Compra processada com sucesso. O total foi: R$${totalAmount},00`;
        });
    }
}
exports.MakePurchaseUC = MakePurchaseUC;
